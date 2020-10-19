import { Application } from "tns-core-modules";
import { EngineEventListener } from "./EngineEventListener";
import { ChannelProfile, ClientRole } from "./Enum";
import { channelProfileProperty, clientRoleProperty, RtcEngineCommon } from "./RtcEngineCommon";

export class RtcEngine extends RtcEngineCommon {

    engine: io.agora.rtc.RtcEngine;
    engineEventListener: EngineEventListener;

    public create(appId): void {

        this.engineEventListener = new EngineEventListener();
        this.engine = io.agora.rtc.RtcEngine.create(Application.android.context, appId, this.engineEventListener);

        if (this.clientRole) {
            this.engine.setClientRole(this.clientRole);
        }

        if (this.channelProfile) {
            this.engine.setChannelProfile(this.channelProfile);
        }

    }

    public joinChannel(token: string | null, channelName: string, optionalInfo: string | null, optionalUid: number): void {
        this.engine.joinChannel(token, channelName, optionalInfo, optionalUid);
    }

    public switchChannel(token: string | null, channelName: string): void {
        this.engine.switchChannel(token, channelName);
    }

    public leaveChannel(): void {
        this.engine.leaveChannel();
    }

    public renewToken(token: string): void {
        this.engine.renewToken(token);
    }

    public enableWebSdkInteroperability(enabled: boolean): void {
        this.engine.enableWebSdkInteroperability(enabled);
    }

    
    [channelProfileProperty.setNative](profile: ChannelProfile) {
        return this.engine.setChannelProfile(profile);
    }

    [clientRoleProperty.setNative](role: ClientRole) {
        this.engine.setClientRole(role);
    }

}