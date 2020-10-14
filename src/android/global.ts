export class Global {

    private static mLocalInvitation: io.agora.rtm.LocalInvitation;
    private static mRemoteInvitation: io.agora.rtm.RemoteInvitation;

    public static getLocalInvitation(): io.agora.rtm.LocalInvitation {
        return this.mLocalInvitation;
    }

    public static setLocalInvitation(invitation: io.agora.rtm.LocalInvitation): void {
        this.mLocalInvitation = invitation;
    }

    public static getRemoteInvitation(): io.agora.rtm.RemoteInvitation {
        return this.mRemoteInvitation;
    }

    public static setRemoteInvitation(invitation: io.agora.rtm.RemoteInvitation): void {
        this.mRemoteInvitation = invitation;
    }
}