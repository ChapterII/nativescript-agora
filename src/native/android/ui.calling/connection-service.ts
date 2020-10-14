import { Config } from "../agora/config";
import { Constants } from "../constants";
import { AgoraConnection } from "./connection";
import * as appModule from "tns-core-modules/application";

export class AgoraConnectionService extends android.telecom.ConnectionService {

    private static TAG = AgoraConnectionService.class.getSimpleName();

    public SCHEME_AG = "customized_call";

    public onCreateIncomingConnection(
        phoneAccount: android.telecom.PhoneAccountHandle,
        request: android.telecom.ConnectionRequest
    ): android.telecom.Connection {

        let extras: android.os.Bundle = request.getExtras();
        let uid = extras.getString(Constants.CS_KEY_UID);
        let channel = extras.getString(Constants.CS_KEY_CHANNEL);
        let subscriber = extras.getString(Constants.CS_KEY_SUBSCRIBER);
        let role = extras.getInt(Constants.CS_KEY_ROLE);
        let videoState = extras.getInt(android.telecom.TelecomManager.EXTRA_START_CALL_WITH_VIDEO_STATE);

        let connection = new AgoraConnection(appModule.android.context, uid, channel, subscriber, role);
        connection.setVideoState(videoState);
        connection.setAddress(android.net.Uri.fromParts(this.SCHEME_AG, subscriber, null), android.telecom.TelecomManager.PRESENTATION_ALLOWED);
        connection.setCallerDisplayName(subscriber, android.telecom.TelecomManager.PRESENTATION_ALLOWED);
        connection.setRinging();
        new Config(appModule.android.context).setConnection(connection);

        return connection;
    }


    public onCreateOutgoingConnection(
        phoneAccount: android.telecom.PhoneAccountHandle,
        request: android.telecom.ConnectionRequest
    ): android.telecom.Connection {

        let extras: android.os.Bundle = request.getExtras();
        let uid = extras.getString(Constants.CS_KEY_UID);
        let channel = extras.getString(Constants.CS_KEY_CHANNEL);
        let subscriber = extras.getString(Constants.CS_KEY_SUBSCRIBER);
        let role = extras.getInt(Constants.CS_KEY_ROLE);
        let videoState = extras.getInt(android.telecom.TelecomManager.EXTRA_START_CALL_WITH_VIDEO_STATE);

        let connection = new AgoraConnection(appModule.android.context, uid, channel, subscriber, role);
        connection.setVideoState(videoState);
        connection.setAddress(android.net.Uri.fromParts(this.SCHEME_AG, subscriber, null), android.telecom.TelecomManager.PRESENTATION_ALLOWED);
        connection.setCallerDisplayName(subscriber, android.telecom.TelecomManager.PRESENTATION_ALLOWED);
        connection.setRinging();
        new Config(appModule.android.context).setConnection(connection);

        return connection;
    }

    public onCreateIncomingConnectionFailed(
        phoneAccount: android.telecom.PhoneAccountHandle,
        request: android.telecom.ConnectionRequest
    ): void { }

    public onCreateOutgoingConnectionFailed(
        phoneAccount: android.telecom.PhoneAccountHandle,
        request: android.telecom.ConnectionRequest
    ): void { }

}
