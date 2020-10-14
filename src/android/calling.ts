import { Global } from "./global";
import { Constants } from "./constants";
import { DiallerRingtone } from "./dialler-ringtone";

export class Calling {

    private mRtmCallManager: io.agora.rtm.RtmCallManager;
    private ringtone: DiallerRingtone;
    private mRole: number;

    constructor(callingManager: io.agora.rtm.RtmCallManager) {
        this.mRtmCallManager = callingManager;
        this.ringtone = new DiallerRingtone();
    }

    public sendCall(peerUid: string, channel: string): void {

        let invitation = this.mRtmCallManager.createLocalInvitation(peerUid);
        invitation.setContent(channel);
        this.mRtmCallManager.sendLocalInvitation(invitation,
            new io.agora.rtm.ResultCallback<java.lang.Void>({
                onSuccess: (aVoid) => {
                    console.log("onSuccess.sendLocalInvitation");
                    this.mRole = Constants.ROLE_CALLER;
                    this.StartRinging();
                },
                onFailure: (errorInfo) => {
                    console.log("onFailure.sendLocalInvitation");
                }
            }));
    }

    public answerCall(): void {
        console.log("answerCall");
        let invitation: io.agora.rtm.RemoteInvitation = Global.getRemoteInvitation();

        if (this.mRtmCallManager != null && invitation != null) {
            this.mRtmCallManager.acceptRemoteInvitation(invitation,
                new io.agora.rtm.ResultCallback<java.lang.Void>({
                    onSuccess: (aVoid) => {
                        this.mRole = Constants.ROLE_CALLEE;
                        this.StopRinging();
                    },
                    onFailure: (errorInfo) => {

                    }
                }));
        }

    }



    public cancelCall(): void {

        if (this.mRtmCallManager != null && Global.getLocalInvitation() != null) {
            this.mRtmCallManager.cancelLocalInvitation(Global.getLocalInvitation(),
                new io.agora.rtm.ResultCallback<java.lang.Void>({
                    onSuccess: (aVoid) => {

                    },
                    onFailure: (errorInfo) => {

                    }
                }));
        }

    }

    public refuseCall(invitation: io.agora.rtm.RemoteInvitation): void {

        if (this.mRtmCallManager != null) {
            this.mRtmCallManager.refuseRemoteInvitation(invitation,
                new io.agora.rtm.ResultCallback<java.lang.Void>({
                    onSuccess: (aVoid) => {
                        console.log("onSuccess.refuseRemoteInvitation");
                        this.StopRinging();
                    },
                    onFailure: (errorInfo) => {

                    }
                }));
        }

    }

    private isCaller(): boolean {
        return this.mRole == Constants.ROLE_CALLER;
    }

    private isCallee(): boolean {
        return this.mRole == Constants.ROLE_CALLEE;
    }

    public StartRinging(): void {
        if (this.isCallee()) {
            this.ringtone.Play('basic_ring');
        } else if (this.isCaller()) {
            this.ringtone.Play('basic_tones');
        }
    }

    private StopRinging(): void {
        this.ringtone.Stop();
    }

}
