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

export const streamModeProperty = new Property<RtcView, streamMode>({
    name: "streamMode"
});
  
export const channelProfileProperty = new Property<RtcView, ChannelProfile>({
    name: "channelProfile"
});

export const clientRoleProperty = new Property<RtcView, ClientRole>({
    name: "clientRole"
});


export class RtcView extends View {


    engine: RtcEngine;

    private streamMode: streamMode;
    private channelProfile: ChannelProfile;
    private clientRole: ClientRole;

    constructor() {

        super();

        this.engine = new RtcEngine();
        this.engine.create(APP_KEY);
        this.engine.channelProfile = this.channelProfile;
        this.engine.clientRole = this.clientRole;

    }

    nativeView: android.widget.LinearLayout;

    public createNativeView() {

        this.nativeView = new android.widget.LinearLayout(this._context);

        permissions.requestPermissions(VIDEO_REQUESTED_PERMISSIONS).then(x => {

            getJSON(TOKEN_AGORA).then((res: any) => {
                this.engine.joinChannel(res.key, DEFAULT_CHANNNEL, "Extra Optional Data", 0);

                if (this.streamMode == 'video') {
                    this.setupLocalVideo();
                }

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


    [streamModeProperty.setNative](streamMode: streamMode) {
        this.streamMode = streamMode;
    }


    [channelProfileProperty.setNative](channelProfile: ChannelProfile) {
        this.channelProfile = channelProfile;
    }

    [clientRoleProperty.setNative](clientRole: ClientRole) {
        this.clientRole = clientRole;
    }

}


streamModeProperty.register(RtcView);
channelProfileProperty.register(RtcView);
clientRoleProperty.register(RtcView);