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

export type streamMode = 'video' | 'audio';

export class RtcView extends View {

    engine: RtcEngine;

    private streamMode: streamMode;

    constructor() {

        super();

        this.engine = new RtcEngine();
        this.engine.create(APP_KEY);
        this.engine.channelProfile = ChannelProfile.Communication;
        this.engine.clientRole = ClientRole.Audience;

    }

    nativeView: android.widget.LinearLayout;

    public createNativeView() {

        this.nativeView = new android.widget.LinearLayout(this._context);

        permissions.requestPermissions(VIDEO_REQUESTED_PERMISSIONS).then(x => {

            getJSON(TOKEN_AGORA).then((res: any) => {
                this.engine.joinChannel(res.key, DEFAULT_CHANNNEL, "Extra Optional Data", 0);
                this.setupLocalVideo();
            });
        });

        return this.nativeView;
    }


    private setupLocalVideo(): void {
        this.engine.enableVideo();
        this.engine.setVideoEncoderConfiguration(new VideoEncoderConfiguration(BitRate.Standard));
        let mLocalView = io.agora.rtc.RtcEngine.CreateRendererView(appModule.android.context);
        mLocalView.setZOrderMediaOverlay(true);
        this.engine.setupLocalVideo(mLocalView, io.agora.rtc.video.VideoCanvas.RENDER_MODE_HIDDEN, 0);
        this.nativeView.addView(mLocalView);
    }


    [streamModeProperty.setNative](mode: streamMode) {
        this.streamMode = mode;
    }

}


export const streamModeProperty = new Property({
    name: "streamMode"
});

streamModeProperty.register(RtcView);
