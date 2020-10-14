import { getJSON } from "tns-core-modules/http";
import { Agora } from "../../../agora.android";
import { TOKEN_AGORA } from "../../../agora.common";
import { IEventListener } from "./event-listener";

@Interfaces([io.agora.rtm.RtmClientListener, io.agora.rtm.RtmCallEventListener])
export class EngineEventListener extends io.agora.rtc.IRtcEngineEventHandler {

    private mListeners: Array<IEventListener> = new Array<IEventListener>();

    constructor(private agora: Agora) {
        super();
    }

    public registerEventListener(listener: IEventListener): void {
        if (!this.mListeners.indexOf(listener)) {
            this.mListeners.push(listener);
        }
    }

    public removeEventListener(listener: IEventListener): void {
        let index = this.mListeners.indexOf(listener);
        this.mListeners.splice(index, 1);
    }

    public onJoinChannelSuccess(channel: string, uid: number, elapsed: number): void {
        let size = this.mListeners.length;
        if (size > 0) {
            this.mListeners[size - 1].onJoinChannelSuccess(channel, uid, elapsed);
        }
    }

    public onUserOffline(uid: number, reason: number): void {
        let size = this.mListeners.length;
        if (size > 0) {
            this.mListeners[size - 1].onUserOffline(uid, reason);
        }
    }

    public onConnectionStateChanged(status: number, reason: number): void {
        let size = this.mListeners.length;
        if (size > 0) {
            this.mListeners[size - 1].onConnectionStateChanged(status, reason);
        }
    }

    public onPeersOnlineStatusChanged(map: java.util.Map<string, java.lang.Integer>): void {
        let size = this.mListeners.length;
        if (size > 0) {
            this.mListeners[size - 1].onPeersOnlineStatusChanged(map);
        }
    }

    public onLocalInvitationReceivedByPeer(localInvitation: io.agora.rtm.LocalInvitation): void {
        let size = this.mListeners.length;
        if (size > 0) {
            this.mListeners[size - 1].onLocalInvitationReceived(localInvitation);
        }
    }

    public onLocalInvitationAccepted(localInvitation: io.agora.rtm.LocalInvitation, response: string): void {
        let size = this.mListeners.length;
        if (size > 0) {
            this.mListeners[size - 1].onLocalInvitationAccepted(localInvitation, response);
        }
    }

    public onLocalInvitationRefused(localInvitation: io.agora.rtm.LocalInvitation, response: string): void {
        let size = this.mListeners.length;
        if (size > 0) {
            this.mListeners[size - 1].onLocalInvitationRefused(localInvitation, response);
        }
    }

    public onLocalInvitationCanceled(localInvitation: io.agora.rtm.LocalInvitation): void {
        let size = this.mListeners.length;
        if (size > 0) {
            this.mListeners[size - 1].onLocalInvitationCanceled(localInvitation);
        }
    }

    public onLocalInvitationFailure(localInvitation: io.agora.rtm.LocalInvitation, errorCode: number): void {
        let size = this.mListeners.length;
        if (size > 0) {
            this.mListeners[size - 1].onLocalInvitationFailure(localInvitation, errorCode);
        }
    }

    public onRemoteInvitationCanceled(remoteInvitation: io.agora.rtm.RemoteInvitation): void {
        let size = this.mListeners.length;
        if (size > 0) {
            this.mListeners[size - 1].onRemoteInvitationCanceled(remoteInvitation);
        }
    }

    public onRemoteInvitationReceived(remoteInvitation: io.agora.rtm.RemoteInvitation): void {
        let size = this.mListeners.length;
        if (size > 0) {
            this.mListeners[size - 1].onRemoteInvitationReceived(remoteInvitation);
        }
    }

    public onRemoteInvitationAccepted(remoteInvitation: io.agora.rtm.RemoteInvitation): void {
        let size = this.mListeners.length;
        if (size > 0) {
            this.mListeners[size - 1].onRemoteInvitationAccepted(remoteInvitation);
        }
    }

    public onRemoteInvitationFailure(remoteInvitation: io.agora.rtm.RemoteInvitation, errorCode: number): void {
        let size = this.mListeners.length;
        if (size > 0) {
            this.mListeners[size - 1].onRemoteInvitationFailure(remoteInvitation, errorCode);
        }
    }

    public onRemoteInvitationRefused(remoteInvitation: io.agora.rtm.RemoteInvitation): void {
        let size = this.mListeners.length;
        if (size > 0) {
            this.mListeners[size - 1].onRemoteInvitationRefused(remoteInvitation);
        }
    }

    public onMediaUploadingProgress(param0: io.agora.rtm.RtmMediaOperationProgress, param1: number): void { }

    public onFileMessageReceivedFromPeer(param0: io.agora.rtm.RtmFileMessage, param1: string): void { }

    public onMessageReceived(param0: io.agora.rtm.RtmMessage, param1: string): void { }

    public onTokenExpired(): void { }

    public onMediaDownloadingProgress(param0: io.agora.rtm.RtmMediaOperationProgress, param1: number): void { }

    public onImageMessageReceivedFromPeer(param0: io.agora.rtm.RtmImageMessage, param1: string): void { }


    onError(error) { }

    onUserJoined(uid: number, elapsed: number) {
        let size = this.mListeners.length;
        if (size > 0) {
            this.mListeners[size - 1].onUserJoined(uid, elapsed);
        }
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