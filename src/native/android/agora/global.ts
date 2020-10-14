export class Global {

    private mLocalInvitation: io.agora.rtm.LocalInvitation;
    private mRemoteInvitation: io.agora.rtm.RemoteInvitation;

    public getLocalInvitation(): io.agora.rtm.LocalInvitation {
        return this.mLocalInvitation;
    }

    public setLocalInvitation(invitation: io.agora.rtm.LocalInvitation): void {
        this.mLocalInvitation = invitation;
    }

    public getRemoteInvitation(): io.agora.rtm.RemoteInvitation {
        return this.mRemoteInvitation;
    }

    public setRemoteInvitation(invitation: io.agora.rtm.RemoteInvitation): void {
        this.mRemoteInvitation = invitation;
    }
}