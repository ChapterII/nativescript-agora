import { View } from "tns-core-modules";
import { getJSON } from "tns-core-modules/http";
import { APP_KEY, DEFAULT_CHANNNEL, TOKEN_AGORA } from "../../agora.common";
import { BitRate, ChannelProfile, ClientRole } from "./Enum";
import { RtcEngine } from "./RtcEngine";
import * as appModule from "tns-core-modules/application";
import * as permissions from "nativescript-permissions";
import { VIDEO_REQUESTED_PERMISSIONS } from "../permissions";
import { VideoEncoderConfiguration } from "./Classes";
import { Property } from "tns-core-modules/ui/core/properties";

export type streamMode = 'local' | 'remote';
export type viewMode = 'local' | 'remote';


export const streamModeProperty = new Property<RtcView, streamMode>({
    name: "streamMode"
});


export const viewModeProperty = new Property({
    name: "viewMode"
});

export class RtcView extends View {

    engine: RtcEngine;

    private streamMode: streamMode;
    private viewModel: viewMode;


    constructor() {

        super();

        this.engine = new RtcEngine();
        this.engine.channelProfile = ChannelProfile.Communication;
        this.engine.clientRole = ClientRole.Audience;
        this.engine.create(APP_KEY);

    }

    nativeView: android.widget.LinearLayout;

    public createNativeView() {

        this.nativeView = new android.widget.LinearLayout(this._context);

        permissions.requestPermissions(VIDEO_REQUESTED_PERMISSIONS).then(x => {

            getJSON(TOKEN_AGORA).then((res: any) => {

                this.engine.joinChannel(res.key, DEFAULT_CHANNNEL, "Extra Optional Data", 0);
                
                let userId = parseInt(Math.floor(Math.random() * 10000).toString());

                if (this.streamMode == 'local') {
                    this.setupLocalVideo(userId);
                } else if (this.streamMode == 'remote') {
                    this.setupRemoteVideo(userId);
                }

            });
        });

        return this.nativeView;
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

    private setupRemoteVideo(uid: number): void {
        this.engine.enableVideo();
        this.engine.setVideoEncoderConfiguration(new VideoEncoderConfiguration(BitRate.Standard));
        let mLocalView = io.agora.rtc.RtcEngine.CreateRendererView(appModule.android.context);
        mLocalView.setZOrderMediaOverlay(true);
        this.engine.setupRemoteVideo(mLocalView, io.agora.rtc.video.VideoCanvas.RENDER_MODE_HIDDEN, uid);
        mLocalView.setTag(String(uid));
        this.nativeView.addView(mLocalView);
    }

}


viewModeProperty.register(RtcView);
streamModeProperty.register(RtcView);
