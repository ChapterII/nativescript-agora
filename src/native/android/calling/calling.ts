import { Global } from "../agora/global";

@Interfaces([io.agora.rtm.RtmChannelListener, io.agora.rtm.ResultCallback])
export class Calling {
    
    private mRtmCallManager: io.agora.rtm.RtmCallManager;

    constructor(callingManager: io.agora.rtm.RtmCallManager) {
        this.mRtmCallManager = callingManager;
    }

    public inviteCall(peerUid: string, channel: string): void {

        let invitation = this.mRtmCallManager.createLocalInvitation(peerUid);
        invitation.setContent(channel);
        this.mRtmCallManager.sendLocalInvitation(invitation,
            new io.agora.rtm.ResultCallback<java.lang.Void>({
                onSuccess: (aVoid) => {

                },
                onFailure: (errorInfo) => {

                }
            }));
        new Global().setLocalInvitation(invitation);

    }

    public answerCall(invitation: io.agora.rtm.RemoteInvitation): void {

        if (this.mRtmCallManager != null && invitation != null) {
            this.mRtmCallManager.acceptRemoteInvitation(invitation,
                new io.agora.rtm.ResultCallback<java.lang.Void>({
                    onSuccess: (aVoid) => {

                    },
                    onFailure: (errorInfo) => {

                    }
                }));
        }

    }

    public cancelLocalInvitation(): void {

        if (this.mRtmCallManager != null && new Global().getLocalInvitation() != null) {
            this.mRtmCallManager.cancelLocalInvitation(new Global().getLocalInvitation(),
                new io.agora.rtm.ResultCallback<java.lang.Void>({
                    onSuccess: (aVoid) => {

                    },
                    onFailure: (errorInfo) => {

                    }
                }));
        }

    }

    public refuseRemoteInvitation(invitation: io.agora.rtm.RemoteInvitation): void {

        if (this.mRtmCallManager != null) {
            this.mRtmCallManager.refuseRemoteInvitation(invitation,
                new io.agora.rtm.ResultCallback<java.lang.Void>({
                    onSuccess: (aVoid) => {

                    },
                    onFailure: (errorInfo) => {

                    }
                }));
        }

    }

    public onRemoteInvitationFailure(remoteInvitation: io.agora.rtm.RemoteInvitation, errorCode: number): void { }

    public onRemoteInvitationCanceled(remoteInvitation: io.agora.rtm.RemoteInvitation): void { }

    public onRemoteInvitationRefused(remoteInvitation: io.agora.rtm.RemoteInvitation): void { }

    public onRemoteInvitationAccepted(remoteInvitation: io.agora.rtm.RemoteInvitation): void {
        // TODO: review the code.
        //gotoVideoActivity(remoteInvitation.getContent(), remoteInvitation.getCallerId());
    }

    public onRemoteInvitationReceived(remoteInvitation: io.agora.rtm.RemoteInvitation): void {
        new Global().setRemoteInvitation(remoteInvitation);
        // TODO: review the code.
        //gotoCallingActivity(remoteInvitation.getContent(), remoteInvitation.getCallerId(), Constants.ROLE_CALLEE);
    }

    public onLocalInvitationFailure(localInvitation: io.agora.rtm.LocalInvitation, errorCode: number): void { }

    public onLocalInvitationCanceled(localInvitation: io.agora.rtm.LocalInvitation): void { }

    public onLocalInvitationRefused(localInvitation: io.agora.rtm.LocalInvitation, response: string): void { }

    public onLocalInvitationAccepted(localInvitation: io.agora.rtm.LocalInvitation, response: string): void {
        // TODO: review the code.
        //gotoVideoActivity(localInvitation.getContent(), localInvitation.getCalleeId());
    }

    public onSuccess(aVoid: java.lang.Void): void { }

    public onFailure(errorInfo: io.agora.rtm.ErrorInfo): void { }

    public onLocalInvitationReceived(localInvitation: io.agora.rtm.LocalInvitation): void { }

}
