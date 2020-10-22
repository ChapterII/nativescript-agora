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

export const viewModeProperty = new Property({
    name: "viewMode"
});

export interface RtcView {
    on(eventNames: string, callback: (args: EventData) => void);
    on(event: 'onEnable', callback: (args: EventData) => void);
}


export class RtcView extends View {


    engine: RtcEngine;
    private viewModel: viewMode;
    private remoteContainerId: string;

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


    nativeView: android.widget.FrameLayout;

    public createNativeView() {

        console.log(this.viewModel);

        this.nativeView = new android.widget.FrameLayout(this._context);

        permissions.requestPermissions(VIDEO_REQUESTED_PERMISSIONS).then(x => {

            getJSON(TOKEN_AGORA).then((res: any) => {

                this.engine.joinChannel(res.key, DEFAULT_CHANNNEL, "Extra Optional Data", 0);
                this.engine.enableVideo();
                this.engine.setVideoEncoderConfiguration(new VideoEncoderConfiguration(BitRate.Standard));
                let userId = parseInt(Math.floor(Math.random() * 10000).toString());

                // if (this.streamMode == 'local') {
                this.setupLocalVideo(userId);
                // }

            });
        });

        return this.nativeView;
    }

    public initNativeView() {

        Application.on(Application.exitEvent, (args) => {
            io.agora.rtc.RtcEngine.destroy();
        });   

        this.page.actionBarHidden = true;
    }

    private setupLocalVideo(uid: number): void {
        this.engine.enableVideo();
        this.engine.setVideoEncoderConfiguration(new VideoEncoderConfiguration(BitRate.Standard));
        let mLocalView = io.agora.rtc.RtcEngine.CreateRendererView(appModule.android.context);
        mLocalView.setZOrderMediaOverlay(true);
        this.engine.setupLocalVideo(mLocalView, io.agora.rtc.video.VideoCanvas.RENDER_MODE_HIDDEN, uid);
        mLocalView.setTag(String(uid));
        this.nativeView.addView(mLocalView);
    }

    disposeNativeView() {

        io.agora.rtc.RtcEngine.destroy();
      }

    private views: Map<number, StackLayout> = new Map();


    removeRemoteVideo(uid) {
          
        let view = this.views.get(uid);

        console.log('removeRemoteVideo');
        console.log('views.size: ' + this.views.size);

        if (view) {
            var viewContainer = <FlexboxLayout>this.page.getViewById(this.remoteContainerId);
            viewContainer.removeChild(view);
            this.views.delete(uid);
        }
        console.log('views.size: ' + this.views.size);

        if (this.views.size == 0) {
            let params = this.nativeView.getLayoutParams();
            params.height = screen.mainScreen.heightPixels;
            this.nativeView.setLayoutParams(params);
        }
    }

    private setupRemoteVideo(uid: number): void {

        if (!this.remoteContainerId && !this.page) {
            return;
        }

        let view = this.views.get(uid);
        if (view) {
            return;
        }

        let params = this.nativeView.getLayoutParams();
        params.height = screen.mainScreen.heightPixels / 2;
        this.nativeView.setLayoutParams(params);


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

    }


}

viewModeProperty.register(RtcView);
remoteContainerIdProperty.register(RtcView);
