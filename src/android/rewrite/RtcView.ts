import { Application, EventData, FlexboxLayout, Placeholder, StackLayout, View } from "tns-core-modules";
import { getJSON } from "tns-core-modules/http";
import { APP_KEY, DEFAULT_CHANNNEL, TOKEN_AGORA } from "../../agora.common";
import { BitRate, ChannelProfile, ClientRole } from "./Enum";
import { RtcEngine } from "./RtcEngine";
import * as appModule from "tns-core-modules/application";
import * as permissions from "nativescript-permissions";
import { VIDEO_REQUESTED_PERMISSIONS } from "../permissions";
import { VideoEncoderConfiguration } from "./Classes";
import { Property } from "tns-core-modules/ui/core/properties";
import { RtcEventHandler } from "./RtcEventHandler";
import { screen } from "tns-core-modules/platform";

export type viewMode = 'video' | 'audio';

export const remoteContainerIdProperty = new Property({
    name: "remoteContainerId"
});

export const viewModeProperty = new Property<RtcView, viewMode>({
    name: "viewMode"
});


export class RtcView extends View {

    public static onLoadRtcEngineEvent = 'RtcEngineLoaded';

    private engine: RtcEngine;
    private remoteContainerId: string;
    private maxViewNumber = 3;
    private views: Map<number, StackLayout> = new Map();
    public nativeView: android.widget.FrameLayout;
    private viewMode: viewMode;
    private localSurfaceView: android.view.SurfaceView;

    constructor() {

        super();

        this.engine = new RtcEngine();
        this.engine.channelProfile = ChannelProfile.Communication;
        this.engine.clientRole = ClientRole.Audience;
        this.engine.create(APP_KEY);

        RtcEventHandler.on("onRemoteVideoStateChanged", (data) => {

            const value = data.value;
            if (value.state == io.agora.rtc.Constants.REMOTE_VIDEO_STATE_STOPPED) {
                this.removeRemoteVideo(value.uid);
            } else if (value.state == io.agora.rtc.Constants.REMOTE_VIDEO_STATE_DECODING) {
                console.log("User Decoding");
                this.setupRemoteVideo(value.uid);
            }

        });



    }

    public createNativeView() {

        this.nativeView = new android.widget.FrameLayout(this._context);

        const owner = new WeakRef(this.engine);
        this.notify({
            eventName: 'RtcEngineLoaded',
            object: this,
            engine: owner.get(),
            view: this
        });

        permissions.requestPermissions(VIDEO_REQUESTED_PERMISSIONS).then(x => {

            getJSON(TOKEN_AGORA).then((res: any) => {
                this.engine.setDefaultAudioRoutetoSpeakerphone(true);
                this.engine.joinChannel(res.key, DEFAULT_CHANNNEL, "Extra Optional Data", 0);
                if (this.viewMode == 'video') {
                    this.engine.enableVideo();
                    this.engine.setVideoEncoderConfiguration(new VideoEncoderConfiguration(BitRate.Standard));
                    // let userId = parseInt(Math.floor(Math.random() * 10000).toString());
                    
                    this.setupLocalVideo();
                }
            });
        });

        let params = this.nativeView.getLayoutParams();
        if (params) {
            params.height = screen.mainScreen.heightPixels;
            params.width = screen.mainScreen.widthPixels;
            this.nativeView.setLayoutParams(params);
        }

        return this.nativeView;
    }

    public initNativeView() {

        this.page.actionBarHidden = true;
        Application.on(Application.suspendEvent, (args) => {
            this.engine.destroy();
        });

    }

    disposeNativeView() {
        this.engine.destroy();
    }

    public setupLocalVideo(): void {
        let mLocalView = io.agora.rtc.RtcEngine.CreateRendererView(appModule.android.context);
        mLocalView.setZOrderMediaOverlay(true);
        this.engine.setupLocalVideo(mLocalView, io.agora.rtc.video.VideoCanvas.RENDER_MODE_HIDDEN, 0);
        // mLocalView.setTag(String(uid));
        this.localSurfaceView = mLocalView;
        this.nativeView.addView(mLocalView);
    }

    public removeLocalView() {
        this.nativeView.removeView(this.localSurfaceView);
    }

    removeRemoteVideo(uid) {

        let view = this.views.get(uid);
        if (view) {
            var viewContainer = <FlexboxLayout>this.page.getViewById(this.remoteContainerId);
            viewContainer.removeChild(view);
            this.views.delete(uid);
        }
        this.adjustNativeViewHeightAndWidth(this.views.size);

    }

    private setupRemoteVideo(uid: number): void {

        if (this.views.size == this.maxViewNumber) {
            return;
        }

        let view = this.views.get(uid);
        if (view) {
            return;
        }

        if (!this.remoteContainerId || !this.page.getViewById) {
            return;
        }


        this.engine.enableVideo();
        this.engine.setVideoEncoderConfiguration(new VideoEncoderConfiguration(BitRate.Standard));
        let mLocalView = io.agora.rtc.RtcEngine.CreateRendererView(appModule.android.context);
        mLocalView.setZOrderMediaOverlay(true);
        this.engine.setupRemoteVideo(mLocalView, io.agora.rtc.video.VideoCanvas.RENDER_MODE_HIDDEN, uid);
        mLocalView.setTag(String(uid));

        var placeHolder: any = new Placeholder();
        placeHolder.on('creatingView', (args: any) => {
            args.view = mLocalView;
        });
        placeHolder.createNativeView();

        var stackLayout = new StackLayout();
        stackLayout.addChild(placeHolder);
        var viewContainer = <FlexboxLayout>this.page.getViewById(this.remoteContainerId);
        viewContainer.addChild(stackLayout);
        this.views.set(uid, stackLayout);

        this.adjustNativeViewHeightAndWidth(this.views.size);

    }

    private adjustNativeViewHeightAndWidth(viewCount: number) {

        if (viewCount == 0) {
            let params = this.nativeView.getLayoutParams();
            if (params) {
                params.height = screen.mainScreen.heightPixels;
                params.width = screen.mainScreen.widthPixels;
                this.nativeView.setLayoutParams(params);
            }
        }

        if (viewCount > 0) {
            let params = this.nativeView.getLayoutParams();
            if (params) {
                params.height = screen.mainScreen.heightPixels / 2;
                this.nativeView.setLayoutParams(params);
            }
        }

    }

}


export interface RtcView {
    on(eventNames: string, callback: (args: EventData) => void);
    on(event: 'tap', callback: (args: EventData) => void);
}


viewModeProperty.register(RtcView);
remoteContainerIdProperty.register(RtcView);
