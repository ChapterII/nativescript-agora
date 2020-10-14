export interface IEventListener {

    onJoinChannelSuccess(channel: string, uid: number, elapsed: number): void;

    onUserJoined(uid: number, elapsed: number): void;

    onUserOffline(uid: number, reason: number): void;

    onConnectionStateChanged(status: number, reason: number): void;

    onPeersOnlineStatusChanged(map: java.util.Map<string, java.lang.Integer>): void;

    onLocalInvitationReceived(localInvitation: io.agora.rtm.LocalInvitation): void;

    onLocalInvitationAccepted(localInvitation: io.agora.rtm.LocalInvitation, response: string): void;

    onLocalInvitationRefused(localInvitation: io.agora.rtm.LocalInvitation, response: string): void;

    onLocalInvitationCanceled(localInvitation: io.agora.rtm.LocalInvitation): void;

    onLocalInvitationFailure(localInvitation: io.agora.rtm.LocalInvitation, errorCode: number): void;

    onRemoteInvitationReceived(remoteInvitation: io.agora.rtm.RemoteInvitation): void;

    onRemoteInvitationAccepted(remoteInvitation: io.agora.rtm.RemoteInvitation): void;

    onRemoteInvitationRefused(remoteInvitation: io.agora.rtm.RemoteInvitation): void;

    onRemoteInvitationCanceled(remoteInvitation: io.agora.rtm.RemoteInvitation): void;

    onRemoteInvitationFailure(remoteInvitation: io.agora.rtm.RemoteInvitation, errorCode: number): void;
}
