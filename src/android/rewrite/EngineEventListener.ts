import { Observable } from "tns-core-modules";
import { RtcEngine } from "./RtcEngine";
import { RtcEventHandler, RtcEvents } from "./RtcEventHandler";


@Interfaces([io.agora.rtm.RtmClientListener, io.agora.rtm.RtmCallEventListener])
export class EngineEventListener extends io.agora.rtc.IRtcEngineEventHandler {

    owner: WeakRef<RtcEngine>;
    constructor(owner: RtcEngine) {
        super();
        this.owner = new WeakRef(owner);
    }

    onRemoteVideoStateChanged(uid, state, reason, elapsed) {

        // console.log("onRemoteVideoStateChanged")  
        // if (state == io.agora.rtc.Constants.REMOTE_VIDEO_STATE_STOPPED) {
        //     console.log("onRemoteVideoStateChanged: REMOTE_VIDEO_STATE_STOPPED")
        // } else if (state == io.agora.rtc.Constants.REMOTE_VIDEO_STATE_DECODING) {
        //     console.log("onRemoteVideoStateChanged: REMOTE_VIDEO_STATE_DECODING")  
  
        // }
        // const owner = this.owner.get();
        // if (owner) {
        //     owner.notify({ eventName: RtcEngine.onRemoteVideoSetupChangeEvent, object: owner, value: { uid: uid, elapsed: elapsed, state: state, reason: reason } });
        // }

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onRemoteVideoStateChanged',
           { uid: uid, elapsed: elapsed, state: state, reason: reason }
        );

    }

    public onJoinChannelSuccess(channel: string, uid: number, elapsed: number): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onJoinChannelSuccess',
            { channel: channel, uid: uid, elapsed: elapsed }
        );

    }

    public onUserOffline(uid: number, reason: number): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onUserOffline',
            { uid: uid, reason: reason }
        );

    }

    public onConnectionStateChanged(status: number, reason: number): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onConnectionStateChanged',
            { status: status, reason: reason }
        );

    }

    public onPeersOnlineStatusChanged(map: java.util.Map<string, java.lang.Integer>): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onPeersOnlineStatusChanged',
            { map: map }
        );

    }

    public onLocalInvitationReceivedByPeer(localInvitation: io.agora.rtm.LocalInvitation): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onLocalInvitationReceivedByPeer',
            { localInvitation: localInvitation }
        );


    }

    public onLocalInvitationAccepted(localInvitation: io.agora.rtm.LocalInvitation, response: string): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onLocalInvitationAccepted',
            { localInvitation: localInvitation, response: response }
        );

    }

    public onLocalInvitationRefused(localInvitation: io.agora.rtm.LocalInvitation, response: string): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onLocalInvitationRefused',
            { localInvitation: localInvitation, response: response }
        );

    }

    public onLocalInvitationCanceled(localInvitation: io.agora.rtm.LocalInvitation): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onLocalInvitationCanceled',
            { localInvitation: localInvitation }
        );

    }

    public onLocalInvitationFailure(localInvitation: io.agora.rtm.LocalInvitation, errorCode: number): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onLocalInvitationFailure',
            { localInvitation: localInvitation, errorCode: errorCode }
        );

    }

    public onRemoteInvitationCanceled(remoteInvitation: io.agora.rtm.RemoteInvitation): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onRemoteInvitationCanceled',
            { remoteInvitation: remoteInvitation }
        );

    }

    public onRemoteInvitationReceived(remoteInvitation: io.agora.rtm.RemoteInvitation): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onRemoteInvitationReceived',
            { remoteInvitation: remoteInvitation }
        );

    }

    public onRemoteInvitationAccepted(remoteInvitation: io.agora.rtm.RemoteInvitation): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onRemoteInvitationAccepted',
            { remoteInvitation: remoteInvitation }
        );

    }

    public onRemoteInvitationFailure(remoteInvitation: io.agora.rtm.RemoteInvitation, errorCode: number): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onRemoteInvitationFailure',
            { remoteInvitation: remoteInvitation, errorCode: errorCode }
        );

    }

    public onRemoteInvitationRefused(remoteInvitation: io.agora.rtm.RemoteInvitation): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onRemoteInvitationRefused',
            { remoteInvitation: remoteInvitation }
        );

    }

    public onMediaUploadingProgress(progress: io.agora.rtm.RtmMediaOperationProgress, param1: number): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onMediaUploadingProgress',
            { progress: progress, param1: param1 }
        );

    }

    public onFileMessageReceivedFromPeer(param0: io.agora.rtm.RtmFileMessage, param1: string): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onFileMessageReceivedFromPeer',
            { param0: param0, param1: param1 }
        );

    }

    public onMessageReceived(param0: io.agora.rtm.RtmMessage, param1: string): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onMessageReceived',
            { param0: param0, param1: param1 }
        );

    }

    public onTokenExpired(): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onTokenExpired',
            null
        );

    }

    public onMediaDownloadingProgress(param0: io.agora.rtm.RtmMediaOperationProgress, param1: number): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onMediaDownloadingProgress',
            { param0: param0, param1: param1 }
        );

    }

    public onImageMessageReceivedFromPeer(param0: io.agora.rtm.RtmImageMessage, param1: string): void {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onImageMessageReceivedFromPeer',
            { param0: param0, param1: param1 }
        );

    }


    onError(error) { }

    onUserJoined(uid: number, elapsed: number) {

        console.log("onUserJoined")

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onUserJoined',
            { uid: uid, elapsed: elapsed }
        );

    }



    onTokenPrivilegeWillExpire() {

        RtcEngineEventHandlerObservable.getInstance().notifyChanges(
            'onTokenPrivilegeWillExpire', null
        );

    }

}




export class RtcEngineEventHandlerObservable extends Observable {

    private static instance: RtcEngineEventHandlerObservable;

    public static getInstance(): RtcEngineEventHandlerObservable {

        if (!RtcEngineEventHandlerObservable.instance) {
            RtcEngineEventHandlerObservable.instance = new RtcEngineEventHandlerObservable();
        }
        return RtcEngineEventHandlerObservable.instance;
    }


    public notifyChanges(eventName: RtcEvents, value: any) {

        this.notify({
            eventName: eventName,
            object: this,
            value: value
        })
    }
}


