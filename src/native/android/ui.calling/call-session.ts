import { Connection } from "./connection";

export class CallSession {

    private mPhoneAccountOut: android.telecom.PhoneAccount;
    private mPhoneAccountIn: android.telecom.PhoneAccount;
    private mConnection: Connection;

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

    public setConnection(connection: Connection): void {
        this.mConnection = connection;
    }

    public getConnection(): Connection {
        return this.mConnection;
    }

}