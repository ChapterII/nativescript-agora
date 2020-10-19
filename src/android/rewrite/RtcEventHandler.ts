import { RtcEngineEventHandlerObservable } from "./EngineEventListener";

export type RtcEvents =
    'onJoinChannelSuccess' | 'onUserOffline' | 'onConnectionStateChanged' | 'onPeersOnlineStatusChanged'
    | 'onLocalInvitationReceivedByPeer' | 'onLocalInvitationAccepted' | 'onLocalInvitationRefused'
    | 'onLocalInvitationCanceled' | 'onLocalInvitationFailure' | 'onRemoteInvitationCanceled'
    | 'onRemoteInvitationReceived' | 'onRemoteInvitationAccepted' | 'onRemoteInvitationFailure'
    | 'onRemoteInvitationRefused' | 'onMediaUploadingProgress' | 'onUserJoined'
    | 'onFileMessageReceivedFromPeer' | 'onMessageReceived' | 'onRemoteVideoStateChanged'
    | 'onTokenExpired' | 'onMediaDownloadingProgress' | 'onImageMessageReceivedFromPeer'
    | 'onTokenPrivilegeWillExpire';


export const RtcEventHandler =
{
    on(event: RtcEvents, callback: (data: any) => void, thisArg?: any) {
        RtcEngineEventHandlerObservable.getInstance().on(event, callback, thisArg);
    }
}
