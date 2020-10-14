import { AgoraConnection } from "./connection";

export class AgoraCallSession {

    private mPhoneAccountOut: android.telecom.PhoneAccount;
    private mPhoneAccountIn: android.telecom.PhoneAccount;
    private mConnection: AgoraConnection;

    public setPhoneAccountIn(pa: android.telecom.PhoneAccount): void {
        this.mPhoneAccountIn = pa;
    }

    public setPhoneAccountOut(pa: android.telecom.PhoneAccount): void {
        this.mPhoneAccountOut = pa;
    }

    public getPhoneAccountIn(): android.telecom.PhoneAccount {
        return this.mPhoneAccountIn;
    }

    public getPhoneAccountOut(): android.telecom.PhoneAccount {
        return this.mPhoneAccountOut;
    }

    public setConnection(connection: AgoraConnection): void {
        this.mConnection = connection;
    }

    public getConnection(): AgoraConnection {
        return this.mConnection;
    }

}