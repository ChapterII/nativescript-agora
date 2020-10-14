import { Constants } from "../constants";

export class AgoraConnection extends android.telecom.Connection {

    private static TAG = AgoraConnection.class.getSimpleName();

    private mContext: android.content.Context;
    private mChannel: string;
    private mUid: string;
    private mSubscriber: string;
    private mRole: number;

    constructor(
        context: android.content.Context,
        uid: string,
        channel: string,
        subscriber: string,
        role: number
    ) {
        super();
        this.mContext = context;
        this.mChannel = channel;
        this.mUid = uid;
        this.mSubscriber = subscriber;
        this.mRole = role;
    }

    public onShowIncomingCallUi(): void {
        super.onShowIncomingCallUi();
    }

    public onDisconnect(): void {
        super.onDisconnect();
        this.setDisconnected(new android.telecom.DisconnectCause(android.telecom.DisconnectCause.LOCAL));
        this.destroy();
    }


    public onAbort(): void {
        super.onAbort();
        this.setDisconnected(new android.telecom.DisconnectCause(android.telecom.DisconnectCause.CANCELED));
        this.destroy();
    }

    public onAnswer(): void {

        super.onAnswer();
        this.setDisconnected(new android.telecom.DisconnectCause(android.telecom.DisconnectCause.LOCAL)); 

        // TODO: saeb review.
        // let intent = new android.content.Intent(this.mContext, VideoActivity.class);
        let intent = new android.content.Intent(this.mContext, null);
        intent.putExtra(Constants.CS_KEY_UID, this.mUid);
        intent.putExtra(Constants.CS_KEY_CHANNEL, this.mChannel);
        intent.putExtra(Constants.CS_KEY_SUBSCRIBER, this.mSubscriber);
        intent.putExtra(Constants.CS_KEY_ROLE, this.mRole);
        intent.setFlags(android.content.Intent.FLAG_ACTIVITY_NEW_TASK);
        this.mContext.startActivity(intent);
    }

    public onReject(): void {
        super.onReject();
        this.setDisconnected(new android.telecom.DisconnectCause(android.telecom.DisconnectCause.REJECTED));
        this.destroy();
    }
}