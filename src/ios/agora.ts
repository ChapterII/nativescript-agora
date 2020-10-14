import { APP_KEY, Common, DEFAULT_CHANNNEL, DEFAULT_VOICE_CHANNEL, TOKEN_AGORA } from '../agora.common';
import { getJSON } from "tns-core-modules/http";
import { AgoraDelegateImpl } from './AgoraDelegateImpl';

declare var AgoraRtcEngineKit,
    AgoraRtcVideoCanvas,
    AgoraVideoRenderMode,
    AgoraVideoEncoderConfiguration,
    AgoraVideoDimension640x360,
    AgoraVideoFrameRate,
    AgoraVideoBitrateStandard,
    AgoraVideoOutputOrientationMode;


export class Agora extends Common {

    agoraKit: any;
    localVideo: UIView;
    remoteVideos: Array<any> = [];
    delegate: AgoraDelegateImpl;

    private isMuted: boolean = false;
    private isVideoHide: boolean = false;

    initializeAgoraEngine(uiView): void {
        this.localVideo = uiView;
        this.delegate = AgoraDelegateImpl.new();
        this.agoraKit = AgoraRtcEngineKit.sharedEngineWithAppIdDelegate(APP_KEY, this.delegate);
        this.delegate.agoraKit = this.agoraKit;

        this.setupVideo();
        this.setupLocalVideo();

        this.agoraKit.setDefaultAudioRouteToSpeakerphone(true);
        getJSON(TOKEN_AGORA).then((res: any) => {
            this.agoraKit.joinChannelByTokenChannelIdInfoUidJoinSuccess(res.key, DEFAULT_CHANNNEL, "Extra Optional Data", 0, null);
        });

        UIApplication.sharedApplication.idleTimerDisabled = true;
    }

    initializeAgoraVoiceEngine(callback: (userId: number) => void): void {
        this.agoraKit = AgoraRtcEngineKit.sharedEngineWithAppIdDelegate(APP_KEY, this.delegate);
        this.agoraKit.setDefaultAudioRouteToSpeakerphone(true);
        getJSON(TOKEN_AGORA).then((res: any) => {
            this.agoraKit.joinChannelByTokenChannelIdInfoUidJoinSuccess(res.key, DEFAULT_VOICE_CHANNEL, "Extra Optional Data", 0, null);
        });
    }

    setupVideo() {
        this.agoraKit.enableVideo();

        this.agoraKit.setVideoEncoderConfiguration(
            AgoraVideoEncoderConfiguration.alloc().initWithSizeFrameRateBitrateOrientationMode(
                AgoraVideoDimension640x360,
                AgoraVideoFrameRate.AgoraVideoFrameRateFps15,
                AgoraVideoBitrateStandard,
                AgoraVideoOutputOrientationMode.AgoraVideoOutputOrientationModeAdaptative
            ));
    }

    setupLocalVideo() {
        let videoCanvas = new AgoraRtcVideoCanvas();
        videoCanvas.uid = 0;
        videoCanvas.view = this.localVideo;
        videoCanvas.renderMode = AgoraVideoRenderMode.AgoraVideoRenderModeHidden;
        this.agoraKit.setupLocalVideo(videoCanvas);
    }
    initRemoteVideo(remoteVideo) {
        this.remoteVideos.push({ uid: null, remoteView: remoteVideo });
        this.delegate.remoteVideos = this.remoteVideos;
    }

    onVideoMuteClicked(): boolean {
        this.isVideoHide = !this.isVideoHide;

        if (this.isVideoHide) {
            this.localVideo.hidden = true;
            this.agoraKit.enableLocalVideo(false);
        } else {
            this.localVideo.hidden = false;
            this.agoraKit.enableLocalVideo(true);
        }
        return this.isVideoHide;
    }




    private leaveChannel() {
        AgoraRtcEngineKit.destroy();
    }

    endCall() {
        this.leaveChannel();
    }

    onLocalAudioMuteClicked(): boolean {
        this.isMuted = !this.isMuted;
        this.agoraKit.muteLocalAudioStream(this.isMuted);
        return this.isMuted;
    }

    onSwitchCameraClicked(): void {
        this.agoraKit.switchCamera();
    }
}



