import { getJSON } from "tns-core-modules/http";
import { Agora } from "../agora.android";
import { TOKEN_AGORA } from "../agora.common";
import { DiallerRingtone } from "./dialler-ringtone";
import {Global } from './global';

@Interfaces([io.agora.rtm.RtmClientListener, io.agora.rtm.RtmCallEventListener])
export class EngineEventListener extends io.agora.rtc.IRtcEngineEventHandler {


    constructor(private agora: Agora) {
        super();
       
    }

    public onJoinChannelSuccess(channel: string, uid: number, elapsed: number): void {
       console.log("onJoinChannelSuccess")
    }

    public onUserOffline(uid: number, reason: number): void {
       console.log("onUserOffline")
        
    }

    public onConnectionStateChanged(status: number, reason: number): void {
       console.log("onConnectionStateChanged")
        
    }

    public onPeersOnlineStatusChanged(map: java.util.Map<string, java.lang.Integer>): void {
        console.log("onPeersOnlineStatusChanged")
       
    }

    public onLocalInvitationReceivedByPeer(localInvitation: io.agora.rtm.LocalInvitation): void {
        console.log("onLocalInvitationReceivedByPeer")
       
    }

    public onLocalInvitationAccepted(localInvitation: io.agora.rtm.LocalInvitation, response: string): void {
       console.log("onLocalInvitationAccepted")
        
    }

    public onLocalInvitationRefused(localInvitation: io.agora.rtm.LocalInvitation, response: string): void {
        console.log("onLocalInvitationRefused")
       
    }

    public onLocalInvitationCanceled(localInvitation: io.agora.rtm.LocalInvitation): void {
       console.log("onLocalInvitationCanceled")
        
    }

    public onLocalInvitationFailure(localInvitation: io.agora.rtm.LocalInvitation, errorCode: number): void {
        console.log("onLocalInvitationFailure")
       
    }

    public onRemoteInvitationCanceled(remoteInvitation: io.agora.rtm.RemoteInvitation): void {
       console.log("onRemoteInvitationCanceled")
        
    }

    public onRemoteInvitationReceived(remoteInvitation: io.agora.rtm.RemoteInvitation): void {
        console.log("onRemoteInvitationReceived");
        Global.setRemoteInvitation(remoteInvitation);
        new DiallerRingtone().Play('basic_tones');
       
    }  

    public onRemoteInvitationAccepted(remoteInvitation: io.agora.rtm.RemoteInvitation): void {
        console.log("onRemoteInvitationAccepted")
       
    }

    public onRemoteInvitationFailure(remoteInvitation: io.agora.rtm.RemoteInvitation, errorCode: number): void {
        console.log("onRemoteInvitationFailure")

    }

    public onRemoteInvitationRefused(remoteInvitation: io.agora.rtm.RemoteInvitation): void {
        console.log("onRemoteInvitationRefused")
       
    }

    public onMediaUploadingProgress(param0: io.agora.rtm.RtmMediaOperationProgress, param1: number): void { }

    public onFileMessageReceivedFromPeer(param0: io.agora.rtm.RtmFileMessage, param1: string): void { }

    public onMessageReceived(param0: io.agora.rtm.RtmMessage, param1: string): void { }

    public onTokenExpired(): void { }

    public onMediaDownloadingProgress(param0: io.agora.rtm.RtmMediaOperationProgress, param1: number): void { }

    public onImageMessageReceivedFromPeer(param0: io.agora.rtm.RtmImageMessage, param1: string): void { }


    onError(error) { }

    onUserJoined(uid: number, elapsed: number) {
        
    }

    onRemoteVideoStateChanged(uid, state, reason, elapsed) {
        if (state == io.agora.rtc.Constants.REMOTE_VIDEO_STATE_STOPPED) {
            this.agora.removeRemoteVideo(uid);
        } else if (state == io.agora.rtc.Constants.REMOTE_VIDEO_STATE_DECODING) {
            this.agora.setupRemoteVideo(uid);
        }
    }

    onTokenPrivilegeWillExpire() {
        getJSON(TOKEN_AGORA).then((res: any) => {
            this.agora.mRtcEngine.renewToken(res.key);
        });
    }

}