import { Constants } from "./constants";
import { CallSession } from "./call-session";
import { Connection } from "./connection";
import { ConnectionService } from "./connection-service";
import { SPUtils } from "./utils/SPUtils";
import { UserUtil } from "./utils/UserUtil";
import * as appModule from "tns-core-modules/application";

export class Config {

    public static DEBUG = false;

    FLAG_USE_SYSTEM_CALL_UI = false;

    private mUserId: string;

    private mUseSystemCall: boolean;

    private mCallSession: CallSession;

    private mVideoDimension =
        io.agora.rtc.video.VideoEncoderConfiguration.VD_640x480;

    private mFrameRate =
        io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE.FRAME_RATE_FPS_15;

    private mOrientation =
        io.agora.rtc.video.VideoEncoderConfiguration.ORIENTATION_MODE.ORIENTATION_MODE_FIXED_PORTRAIT;
        
    constructor(context: android.content.Context) {
        this.initUserId(context);
        this.checkSystemCallSupport(context);
    }

    private initUserId(context: android.content.Context): void {
        let currentId = SPUtils.getUserId(context);
        if (currentId == null) {
            currentId = UserUtil.randomUserId();
            SPUtils.saveUserId(context, currentId);
        }
        this.mUserId = currentId;
    }

    private checkSystemCallSupport(context: android.content.Context): void {
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
            this.registerPhoneAccount(context);
            this.mUseSystemCall = true;
        }
    }

    public getUserId(): string {
        return this.mUserId;
    }

    getDimension(): io.agora.rtc.video.VideoEncoderConfiguration.VideoDimensions {
        return this.mVideoDimension;
    }

    public getFrameRate(): io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE {
        return this.mFrameRate;
    }

    public getOrientation(): io.agora.rtc.video.VideoEncoderConfiguration.ORIENTATION_MODE {
        return this.mOrientation;
    }

    public useSystemCallInterface(): boolean {
        return this.mUseSystemCall && this.FLAG_USE_SYSTEM_CALL_UI;
    }

    registerPhoneAccount(androidContext: android.content.Context): void {

        let accountHandleIn = new android.telecom.PhoneAccountHandle(
            new android.content.ComponentName(androidContext, ConnectionService.class),
            Constants.PA_LABEL_CALL_IN
        );

        let accountHandleOut = new android.telecom.PhoneAccountHandle(
            new android.content.ComponentName(androidContext, ConnectionService.class),
            Constants.PA_LABEL_CALL_OUT
        );

        let paBuilder: android.telecom.PhoneAccount.Builder;

        paBuilder = android.telecom.PhoneAccount.builder(accountHandleIn, Constants.PA_LABEL_CALL_IN)
            .setCapabilities(android.telecom.PhoneAccount.CAPABILITY_CONNECTION_MANAGER);

        let phoneIn = paBuilder.build();

        paBuilder = android.telecom.PhoneAccount.builder(accountHandleOut, Constants.PA_LABEL_CALL_OUT)
            .setCapabilities(android.telecom.PhoneAccount.CAPABILITY_CONNECTION_MANAGER);

        let extra: android.os.Bundle = new android.os.Bundle();
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.P) {
            extra.putBoolean(android.telecom.PhoneAccount.EXTRA_LOG_SELF_MANAGED_CALLS, true);
        }

        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.N) {
            paBuilder.setExtras(extra);
        }

        let phoneOut = paBuilder.build();

        let telecomManager: android.telecom.TelecomManager =
            androidContext.getSystemService(appModule.android.context.TELECOM_SERVICE);

        telecomManager.registerPhoneAccount(phoneIn);
        telecomManager.registerPhoneAccount(phoneOut);

        this.mCallSession = new CallSession();
        this.mCallSession.setPhoneAccountIn(phoneIn);
        this.mCallSession.setPhoneAccountOut(phoneOut);
    }

    public getPhoneAccountIn(): android.telecom.PhoneAccount {
        return this.mCallSession == null ? null : this.mCallSession.getPhoneAccountIn();
    }

    public getPhoneAccountOut(): android.telecom.PhoneAccount {
        return this.mCallSession == null ? null : this.mCallSession.getPhoneAccountOut();
    }

    public setConnection(connection: Connection): void {
        if (this.mCallSession != null) {
            this.mCallSession.setConnection(connection);
        }
    }

 
}
