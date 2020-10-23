import { Application } from "tns-core-modules";
import { BeautyOptions, UserInfo, VideoEncoderConfiguration } from "./Classes";
import { EngineEventListener } from "./EngineEventListener";
import { AudioProfile, AudioScenario, ConnectionStateType, LogFilter } from "./Enum";
import { RtcEngineCommon } from "./RtcEngineCommon";

type Rate = 1 | 2 | 3 | 4 | 5;


export class RtcEngine extends RtcEngineCommon {

    public static onJoinChannelSuccessEvent = 'joinChannelSuccess';
    public static onUserOfflineEvent = 'userOffline';
    public static onConnectionStateChangedEvent = 'connectionStateChanged';
    public static onPeersOnlineStatusChangedEvent = 'peersOnlineStatusChanged';
    public static onLocalInvitationReceivedByPeerEvent = 'localInvitationReceivedByPeer';
    public static onLocalInvitationAcceptedEvent = 'localInvitationAccepted';
    public static onLocalInvitationRefusedEvent = 'localInvitationRefused';
    public static onLocalInvitationCanceledEvent = 'localInvitationCanceled';
    public static onLocalInvitationFailureEvent = 'localInvitationFailure';
    public static onRemoteInvitationCanceledEvent = 'remoteInvitationCanceled';
    public static onRemoteInvitationReceivedEvent = 'remoteInvitationReceived';
    public static onRemoteInvitationAcceptedEvent = 'remoteInvitationAccepted';
    public static onRemoteInvitationFailureevent = 'remoteInvitationFailure';
    public static onRemoteInvitationRefusedEvent = 'remoteInvitationRefused';
    public static onMediaUploadingProgressEvent = 'mediaUploadingProgress';
    public static onUserJoinedEvent = 'userJoined';
    public static onFileMessageReceivedFromPeerEvent = 'fileMessageReceivedFromPeer';
    public static onMessageReceivedEvent = 'messageReceived';
    public static onRemoteVideoStateChangedEvent = 'remoteVideoStateChanged';
    public static onTokenExpiredEvent = 'tokenExpired';
    public static onMediaDownloadingProgressEvent = 'mediaDownloadingProgress';
    public static onImageMessageReceivedFromPeerEvent = 'imageMessageReceivedFromPeer';
    public static onTokenPrivilegeWillExpireEvent = 'tokenPrivilegeWillExpire';


    rtcEngine: io.agora.rtc.RtcEngine;
    engineEventListener: EngineEventListener;


    constructor() {
        super();
    }


    public create(appId): void {

        this.engineEventListener = new EngineEventListener(this);
        this.rtcEngine = io.agora.rtc.RtcEngine.create(Application.android.context, appId, this.engineEventListener);

        if (this.channelProfile) {
            this.rtcEngine.setChannelProfile(this.channelProfile);
        }

        if (this.clientRole) {
            this.rtcEngine.setClientRole(this.clientRole);
        }

    }


    enableDualStreamMode(param0: boolean): void {
        this.rtcEngine.enableDualStreamMode(param0);
    }

    public CreateRendererView(context: any): android.view.SurfaceView {
        return io.agora.rtc.RtcEngine.CreateRendererView(context);
    }

    public setupLocalVideo(view: globalAndroid.view.View, renderMode: number, uid: number): void {

        this.rtcEngine.setupLocalVideo(new io.agora.rtc.video.VideoCanvas(
            view,
            io.agora.rtc.video.VideoCanvas.RENDER_MODE_HIDDEN,
            uid)
        );
    }


    public setupRemoteVideo(view: globalAndroid.view.View, renderMode: number, uid: number): void {

        this.rtcEngine.setupRemoteVideo(new io.agora.rtc.video.VideoCanvas(
            view,
            io.agora.rtc.video.VideoCanvas.RENDER_MODE_HIDDEN,
            uid)
        );
    }


    public switchCamera(): void {
        this.rtcEngine.switchCamera();
    }

    public joinChannel(token: string | null, channelName: string, optionalInfo: string | null, optionalUid: number): void {
        this.rtcEngine.joinChannel(token, channelName, optionalInfo, optionalUid);
    }

    public switchChannel(token: string | null, channelName: string): void {
        this.rtcEngine.switchChannel(token, channelName);
    }

    public leaveChannel(): void {
        this.rtcEngine.leaveChannel();
    }

    public destroy(): void {
        io.agora.rtc.RtcEngine.destroy();
    }

    public renewToken(token: string): void {
        this.rtcEngine.renewToken(token);
    }

    public enableWebSdkInteroperability(enabled: boolean): void {
        this.rtcEngine.enableWebSdkInteroperability(enabled);
    }

    public getConnectionState(): ConnectionStateType {
        return this.rtcEngine.getConnectionState();
    }

    public getCallId(): string {
        return this.rtcEngine.getCallId();
    }

    public rate(callId: string, rating: Rate, description?: string): void {
        this.rtcEngine.rate(callId, rating, description);
    }

    public complain(callId: string, description: string): void {
        this.rtcEngine.complain(callId, description);
    }

    public setLogFile(filePath: string): void {
        this.rtcEngine.setLogFile(filePath);
    }

    public setLogFilter(filter: LogFilter): void {
        this.rtcEngine.setLogFilter(filter);
    }

    public setLogFileSize(fileSizeInKBytes: number): void {
        this.rtcEngine.setLogFileSize(fileSizeInKBytes);
    }

    public setParameters(parameters: string): void {
        this.rtcEngine.setParameters(parameters);
    }

    public getUserInfoByUid(uid: number, user: UserInfo): number {
        return this.rtcEngine.getUserInfoByUid(uid, user);
    }

    public getUserInfoByUserAccount(userAccount: string, user: UserInfo): number {
        return this.rtcEngine.getUserInfoByUserAccount(userAccount, user);
    }

    public registerLocalUserAccount(appId: string, userAccount: string): void {
        this.rtcEngine.registerLocalUserAccount(appId, userAccount)
    }

    public joinChannelWithUserAccount(token: string | null, channelName: string, userAccount: string): void {
        this.rtcEngine.joinChannelWithUserAccount(token, channelName, userAccount)
    }

    public adjustPlaybackSignalVolume(volume: number): void {
        this.rtcEngine.adjustPlaybackSignalVolume(volume);
    }

    public adjustRecordingSignalVolume(volume: number): void {
        this.rtcEngine.adjustRecordingSignalVolume(volume)
    }

    public adjustUserPlaybackSignalVolume(uid: number, volume: number): void {
        this.rtcEngine.adjustUserPlaybackSignalVolume(uid, volume)
    }

    public disableAudio(): void {
        this.rtcEngine.disableAudio();
    }

    public enableAudio(): void {
        this.rtcEngine.enableAudio();
    }

    public enableAudioVolumeIndication(interval: number, smooth: number, report_vad: boolean): void {
        this.rtcEngine.enableAudioVolumeIndication(interval, smooth, report_vad);
    }

    public enableLocalAudio(enabled: boolean): void {
        this.rtcEngine.enableLocalAudio(enabled);
    }

    public muteAllRemoteAudioStreams(muted: boolean): void {
        this.rtcEngine.muteAllRemoteAudioStreams(muted);
    }

    public muteLocalAudioStream(muted: boolean): void {
        this.rtcEngine.muteLocalAudioStream(muted);
    }

    public muteRemoteAudioStream(uid: number, muted: boolean): void {
        this.rtcEngine.muteRemoteAudioStream(uid, muted);
    }

    public setAudioProfile(profile: AudioProfile, scenario: AudioScenario): void {
        this.rtcEngine.setAudioProfile(profile, scenario);
    }

    public setDefaultMuteAllRemoteAudioStreams(muted: boolean): void {
        this.rtcEngine.setDefaultMuteAllRemoteAudioStreams(muted);
    }

    public disableVideo(): void {
        this.rtcEngine.disableVideo();
    }

    public enableLocalVideo(enabled: boolean): void {
        this.rtcEngine.enableLocalVideo(enabled);
    }

    public enableVideo(): void {
        this.rtcEngine.enableVideo();
    }

    public muteAllRemoteVideoStreams(muted: boolean): void {
        this.rtcEngine.muteAllRemoteVideoStreams(muted);
    }

    public muteLocalVideoStream(muted: boolean): void {
        this.rtcEngine.muteLocalVideoStream(muted);
    }

    public muteRemoteVideoStream(uid: number, muted: boolean): void {
        this.rtcEngine.muteRemoteVideoStream(uid, muted);
    }

    public setBeautyEffectOptions(enabled: boolean, options: BeautyOptions): void {
        this.rtcEngine.setBeautyEffectOptions(enabled, options);
    }

    public setDefaultMuteAllRemoteVideoStreams(muted: boolean): void {
        this.rtcEngine.setDefaultMuteAllRemoteVideoStreams(muted);
    }

    // remark: review this code.
    public setVideoEncoderConfiguration(config: VideoEncoderConfiguration): number {

        return this.rtcEngine.setVideoEncoderConfiguration(new io.agora.rtc.video.VideoEncoderConfiguration(
            io.agora.rtc.video.VideoEncoderConfiguration.VD_640x360,
            io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE.FRAME_RATE_FPS_15,
            config.bitrate,
            io.agora.rtc.video.VideoEncoderConfiguration.ORIENTATION_MODE.ORIENTATION_MODE_FIXED_PORTRAIT));

    }

    public startPreview(): void {
        this.rtcEngine.startPreview();
    }

    public stopPreview(): void {
        this.rtcEngine.stopPreview();
    }

    public adjustAudioMixingPlayoutVolume(volume: number): void {
        this.rtcEngine.adjustAudioMixingPlayoutVolume(volume);
    }

    public adjustAudioMixingPublishVolume(volume: number): void {
        this.rtcEngine.adjustAudioMixingPublishVolume(volume);
    }

    public adjustAudioMixingVolume(volume: number): void {
        this.rtcEngine.adjustAudioMixingVolume(volume);
    }

    public getAudioMixingCurrentPosition(): number {
        return this.rtcEngine.getAudioMixingCurrentPosition();
    }

    public getAudioMixingDuration(): number {
        return this.rtcEngine.getAudioMixingDuration();
    }

    public getAudioMixingPlayoutVolume(): number {
        return this.rtcEngine.getAudioMixingPlayoutVolume();
    }

    public getAudioMixingPublishVolume(): number {
        return this.rtcEngine.getAudioMixingPublishVolume();
    }

    public pauseAudioMixing(): void {
        this.rtcEngine.pauseAudioMixing();
    }

    public resumeAudioMixing(): void {
        this.rtcEngine.resumeAudioMixing();
    }

    public setAudioMixingPitch(pitch: number): void {
        this.rtcEngine.setAudioMixingPitch(pitch);
    }

    public setAudioMixingPosition(pos: number): void {
        this.rtcEngine.setAudioMixingPosition(pos);
    }

    public startAudioMixing(filePath: string, loopback: boolean, replace: boolean, cycle: number): void {
        this.rtcEngine.startAudioMixing(filePath, loopback, replace, cycle);
    }

    public stopAudioMixing(): void {
        this.rtcEngine.stopAudioMixing();
    }

    public setDefaultAudioRoutetoSpeakerphone(isSpeaker: boolean): void {
        this.rtcEngine.setDefaultAudioRoutetoSpeakerphone(isSpeaker);
    }

}