import { APP_KEY, Common, DEFAULT_CHANNNEL, DEFAULT_VOICE_CHANNEL, TOKEN_AGORA } from '../agora.common';
import * as appModule from "tns-core-modules/application";
import * as permissions from "nativescript-permissions";
import { getJSON } from 'tns-core-modules/http';
import { EngineEventListener } from '../native/android/agora/engine-event-listener';

const token = "rtm_token";


export class Agora extends Common {

    mRtcEngine: io.agora.rtc.RtcEngine;
    mRtmClient: io.agora.rtm.RtmClient;
    rtmCallManager: io.agora.rtm.RtmCallManager;

    private REQUESTED_PERMISSIONS = [
        android.Manifest.permission.RECORD_AUDIO,
        android.Manifest.permission.CAMERA,
        android.Manifest.permission.WRITE_EXTERNAL_STORAGE
    ];

    private localFrameLayout;
    private localSurfaceView;

    private mRemoteContainer = [];

    private isMuted: boolean = false;
    private isVideoHide: boolean = false;

    initializeAgoraEngine(localFrameLayout): void {

        this.localFrameLayout = localFrameLayout;
        permissions.requestPermissions(this.REQUESTED_PERMISSIONS).then(x => {

            let engineEventListener = new EngineEventListener(this);
            this.mRtcEngine = io.agora.rtc.RtcEngine.create(appModule.android.context, APP_KEY, engineEventListener);

            this.mRtcEngine.setChannelProfile(io.agora.rtc.Constants.CHANNEL_PROFILE_COMMUNICATION);
            this.mRtcEngine.enableDualStreamMode(true);
            this.setupVideoConfig();
            this.setupLocalVideo();
            this.mRtmClient = io.agora.rtm.RtmClient.createInstance(appModule.android.context, APP_KEY, engineEventListener);
            this.rtmCallManager = this.mRtmClient.getRtmCallManager();
            this.rtmCallManager.setEventListener(engineEventListener);

            let userId = Math.floor(Math.random() * 10000).toString();
            this.mRtmClient.login(token, userId, new io.agora.rtm.ResultCallback<java.lang.Void>({
                onSuccess: (aVoid) => {
                    console.log('rtm client login success');
                },
                onFailure: (errorInfo) => {
                    console.log("rtm client login failed:" + errorInfo.getErrorDescription());
                }
            }));

            getJSON(TOKEN_AGORA).then((res: any) => {
                this.mRtcEngine.joinChannel(res.key, DEFAULT_CHANNNEL, "Extra Optional Data", 0);
            });
        });
    }

    initializeAgoraVoiceEngine(): void {

        permissions.requestPermissions([android.Manifest.permission.RECORD_AUDIO]).then(x => {
            let engineEventListener = new EngineEventListener(this);
            this.mRtcEngine = io.agora.rtc.RtcEngine.create(appModule.android.context, APP_KEY, engineEventListener);
            this.mRtcEngine.setChannelProfile(io.agora.rtc.Constants.CHANNEL_PROFILE_COMMUNICATION);
            getJSON(TOKEN_AGORA).then((res: any) => {
                this.mRtcEngine.joinChannel(res.key, DEFAULT_VOICE_CHANNEL, "Extra Optional Data", 0);
                this.mRtcEngine.setDefaultAudioRoutetoSpeakerphone(true);
            });

        });
    }

    private setupVideoConfig() {

        this.mRtcEngine.enableVideo();

        this.mRtcEngine.setVideoEncoderConfiguration(
            new io.agora.rtc.video.VideoEncoderConfiguration(
                io.agora.rtc.video.VideoEncoderConfiguration.VD_640x360,
                io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE.FRAME_RATE_FPS_15,
                io.agora.rtc.video.VideoEncoderConfiguration.STANDARD_BITRATE,
                io.agora.rtc.video.VideoEncoderConfiguration.ORIENTATION_MODE.ORIENTATION_MODE_FIXED_PORTRAIT));
    }

    initRemoteVideo(relativeLayout) {
        this.mRemoteContainer.push({ layout: relativeLayout, uid: null, remoteView: null });
    }


    setupLocalVideo(): void {
        let mLocalView = io.agora.rtc.RtcEngine.CreateRendererView(appModule.android.context);
        mLocalView.setZOrderMediaOverlay(true);
        this.mRtcEngine.setupLocalVideo(new io.agora.rtc.video.VideoCanvas(mLocalView, io.agora.rtc.video.VideoCanvas.RENDER_MODE_HIDDEN, 0));
        this.localFrameLayout.addView(mLocalView);
        this.localSurfaceView = mLocalView;
    }

    setupRemoteVideo(uid: number) {
        if (this.mRemoteContainer.find(remoteContainer => remoteContainer.uid == uid)) {
            return;
        } else {
            let remoteContainer = this.mRemoteContainer.find(remoteContainer => remoteContainer.uid == null);
            if (remoteContainer) {
                remoteContainer.uid = uid;
                let mRemoteView = io.agora.rtc.RtcEngine.CreateRendererView(appModule.android.context);
                remoteContainer.layout.addView(mRemoteView);
                this.mRtcEngine.setupRemoteVideo(new io.agora.rtc.video.VideoCanvas(mRemoteView, io.agora.rtc.video.VideoCanvas.RENDER_MODE_HIDDEN, uid));
                mRemoteView.setTag(String(uid));
                remoteContainer.remoteView = mRemoteView;
            }
        }
    }

    onVideoMuteClicked(): boolean {
        this.isVideoHide = !this.isVideoHide;

        if (this.isVideoHide) {
            this.removeLocalVideo();
            this.mRtcEngine.enableLocalVideo(false);
        } else {
            this.mRtcEngine.enableLocalVideo(true);
            this.setupLocalVideo();
        }
        return this.isVideoHide;
    }

    private removeLocalVideo() {
        if (this.localSurfaceView != null) {
            this.localFrameLayout.removeView(this.localSurfaceView);
        }
        this.localSurfaceView = null;
    }

    removeRemoteVideo(uid) {
        let mRemoteContainer = this.mRemoteContainer.find(v => v.uid == uid);
        if (mRemoteContainer) {
            if (mRemoteContainer.remoteView != null) {
                mRemoteContainer.layout.removeView(mRemoteContainer.remoteView);
            }
            mRemoteContainer.remoteView = null;
            mRemoteContainer.uid = null;
        }
    }

    removeAllRemoteVideo() {
        this.mRemoteContainer.forEach(container => this.removeRemoteVideo(container.uid));
    }

    private leaveChannel() {
        io.agora.rtc.RtcEngine.destroy();
    }

    endCall() {
        this.leaveChannel();
    }

    onLocalAudioMuteClicked(): boolean {
        this.isMuted = !this.isMuted;
        this.mRtcEngine.muteLocalAudioStream(this.isMuted);
        return this.isMuted;
    }

    onSwitchCameraClicked(): void {
        this.mRtcEngine.switchCamera();
    }


}





// class FileUtil {

//     public LOG_FOLDER_NAME = "log";
//     public RTC_LOG_FILE_NAME = "agora-rtc.log";
//     public RTM_LOG_FILE_NAME = "agora-rtm.log";

//     rtcLogFile(context: android.content.Context): string {
//         return this.logFilePath(context, this.RTC_LOG_FILE_NAME);
//     }

//     rtmLogFile(context: android.content.Context): string {
//         return this.logFilePath(context, this.RTM_LOG_FILE_NAME);
//     }

//     logFilePath(context: android.content.Context, name: string): string {

//         let folder;
//         if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.Q) {
//             folder = new java.io.File(context.getExternalFilesDir(android.os.Environment.DIRECTORY_DOCUMENTS), this.LOG_FOLDER_NAME);
//         } else {
//             let path: string = android.os.Environment.getExternalStorageDirectory()
//                 .getAbsolutePath() + java.io.File.separator +
//                 context.getPackageName() + java.io.File.separator +
//                 name;
//             folder = new java.io.File(path);
//             if (!folder.exists() && !folder.mkdir()) folder = null;
//         }

//         if (folder != null && !folder.exists() && !folder.mkdir()) return "";
//         else return new java.io.File(folder, this.RTC_LOG_FILE_NAME).getAbsolutePath();
//     }
// }
