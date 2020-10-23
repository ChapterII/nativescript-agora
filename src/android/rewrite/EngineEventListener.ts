import { RtcEngine } from "./RtcEngine";


@Interfaces([io.agora.rtm.RtmClientListener, io.agora.rtm.RtmCallEventListener])
export class EngineEventListener extends io.agora.rtc.IRtcEngineEventHandler {

    owner: WeakRef<RtcEngine>;
    constructor(owner: RtcEngine) {
        super();
        this.owner = new WeakRef(owner);
    }

    onRemoteVideoStateChanged(uid, state, reason, elapsed) {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onRemoteVideoStateChangedEvent,
                object: owner,  
                uid: uid,
                elapsed: elapsed,
                state: state,
                reason: reason
            });
        }

    }

    public onJoinChannelSuccess(channel: string, uid: number, elapsed: number): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onJoinChannelSuccessEvent,
                object: owner,
                uid: uid,
                elapsed: elapsed,
                channel: channel
            });
        }

    }

    public onUserOffline(uid: number, reason: number): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onUserOfflineEvent,
                object: owner,
                uid: uid,
                reason: reason
            });
        }

    }

    public onConnectionStateChanged(status: number, reason: number): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onConnectionStateChangedEvent,
                object: owner,
                status: status,
                reason: reason
            });
        }

    }

    public onPeersOnlineStatusChanged(map: java.util.Map<string, java.lang.Integer>): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onPeersOnlineStatusChangedEvent,
                object: owner,
                map: map
            });
        }

    }

    public onLocalInvitationReceivedByPeer(localInvitation: io.agora.rtm.LocalInvitation): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onLocalInvitationReceivedByPeerEvent,
                object: owner,
                localInvitation: localInvitation
            });
        }

    }

    public onLocalInvitationAccepted(localInvitation: io.agora.rtm.LocalInvitation, response: string): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onLocalInvitationAcceptedEvent,
                object: owner,
                localInvitation: localInvitation,
                response: response
            });
        }

    }

    public onLocalInvitationRefused(localInvitation: io.agora.rtm.LocalInvitation, response: string): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onLocalInvitationRefusedEvent,
                object: owner,
                localInvitation: localInvitation,
                response: response
            });
        }

    }

    public onLocalInvitationCanceled(localInvitation: io.agora.rtm.LocalInvitation): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onLocalInvitationCanceledEvent,
                object: owner,
                localInvitation: localInvitation
            });
        }

    }

    public onLocalInvitationFailure(localInvitation: io.agora.rtm.LocalInvitation, errorCode: number): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onLocalInvitationFailureEvent,
                object: owner,
                localInvitation: localInvitation,
                errorCode: errorCode
            });
        }

    }

    public onRemoteInvitationCanceled(remoteInvitation: io.agora.rtm.RemoteInvitation): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onRemoteInvitationCanceledEvent,
                object: owner,
                remoteInvitation: remoteInvitation
            });
        }

    }

    public onRemoteInvitationReceived(remoteInvitation: io.agora.rtm.RemoteInvitation): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onRemoteInvitationReceivedEvent,
                object: owner,
                remoteInvitation: remoteInvitation
            });
        }

    }

    public onRemoteInvitationAccepted(remoteInvitation: io.agora.rtm.RemoteInvitation): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onRemoteInvitationAcceptedEvent,
                object: owner,
                remoteInvitation: remoteInvitation
            });
        }

    }

    public onRemoteInvitationFailure(remoteInvitation: io.agora.rtm.RemoteInvitation, errorCode: number): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onRemoteInvitationFailureevent,
                object: owner,
                remoteInvitation: remoteInvitation,
                errorCode: errorCode
            });
        }

    }

    public onRemoteInvitationRefused(remoteInvitation: io.agora.rtm.RemoteInvitation): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onRemoteInvitationRefusedEvent,
                object: owner,
                remoteInvitation: remoteInvitation
            });
        }

    }

    public onMediaUploadingProgress(progress: io.agora.rtm.RtmMediaOperationProgress, param1: number): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onMediaUploadingProgressEvent,
                object: owner,
                progress: progress,
                param1: param1
            });
        }

    }

    public onFileMessageReceivedFromPeer(param0: io.agora.rtm.RtmFileMessage, param1: string): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onFileMessageReceivedFromPeerEvent,
                object: owner,
                param0: param0,
                param1: param1
            });
        }

    }

    public onMessageReceived(param0: io.agora.rtm.RtmMessage, param1: string): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onMessageReceivedEvent,
                object: owner,
                param0: param0,
                param1: param1
            });
        }

    }

    public onTokenExpired(): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onTokenExpiredEvent,
                object: owner
            });
        }
    }

    public onMediaDownloadingProgress(param0: io.agora.rtm.RtmMediaOperationProgress, param1: number): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onMediaDownloadingProgressEvent,
                object: owner,
                param0: param0,
                param1: param1
            });
        }

    }

    public onImageMessageReceivedFromPeer(param0: io.agora.rtm.RtmImageMessage, param1: string): void {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onFileMessageReceivedFromPeerEvent,
                object: owner,
                param0: param0,
                param1: param1
            });
        }

    }


    onError(error) { }

    onUserJoined(uid: number, elapsed: number) {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onUserJoinedEvent,
                object: owner,
                uid: uid,
                elapsed: elapsed
            });
        }

    }



    onTokenPrivilegeWillExpire() {

        const owner = this.owner.get();
        if (owner) {
            owner.notify({
                eventName: RtcEngine.onTokenPrivilegeWillExpireEvent,
                object: owner
            });
        }

    }

}



