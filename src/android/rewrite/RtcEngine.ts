import { Application, EventData } from "tns-core-modules";
import { BeautyOptions, UserInfo, VideoEncoderConfiguration } from "./Classes";
import { EngineEventListener } from "./EngineEventListener";
import { AudioProfile, AudioScenario, ChannelProfile, ClientRole, ConnectionStateType, LogFilter, VideoOutputOrientationMode } from "./Enum";
import { RtcEngineCommon } from "./RtcEngineCommon";

type Rate = 1 | 2 | 3 | 4 | 5;


export class RtcEngine extends RtcEngineCommon {

    engine: io.agora.rtc.RtcEngine;
    engineEventListener: EngineEventListener;

    public static onRemoteVideoSetupChangeEvent = 'onRemoteVideoSetup';

    public create(appId): void {

        this.engineEventListener = new EngineEventListener(this);

        this.engine = io.agora.rtc.RtcEngine.create(Application.android.context, appId, this.engineEventListener);
        this.engine.enableDualStreamMode(true);

        if (this.channelProfile) {
            this.engine.setChannelProfile(this.channelProfile);
        }

        if (this.clientRole) {
            this.engine.setClientRole(this.clientRole);
        }

    }
    public CreateRendererView(context: any): android.view.SurfaceView {
        return io.agora.rtc.RtcEngine.CreateRendererView(context);
    }

    public setupLocalVideo(view: globalAndroid.view.View, renderMode: number, uid: number): void {

        this.engine.setupLocalVideo(new io.agora.rtc.video.VideoCanvas(
            view,
            io.agora.rtc.video.VideoCanvas.RENDER_MODE_HIDDEN,
            uid)
        );
    }


    public setupRemoteVideo(view: globalAndroid.view.View, renderMode: number, uid: number): void {

        this.engine.setupRemoteVideo(new io.agora.rtc.video.VideoCanvas(
            view,
            io.agora.rtc.video.VideoCanvas.RENDER_MODE_HIDDEN,
            uid)
        );
    }


    public switchCamera(): void {
        this.engine.switchCamera();
    }

    public joinChannel(token: string | null, channelName: string, optionalInfo: string | null, optionalUid: number): void {
        this.engine.joinChannel(token, channelName, optionalInfo, optionalUid);
    }

    public switchChannel(token: string | null, channelName: string): void {
        this.engine.switchChannel(token, channelName);
    }

    public leaveChannel(): void {
        this.engine.leaveChannel();
    }

    public destroy(): void {
        io.agora.rtc.RtcEngine.destroy();
    }
    
    public renewToken(token: string): void {
        this.engine.renewToken(token);
    }

    public enableWebSdkInteroperability(enabled: boolean): void {
        this.engine.enableWebSdkInteroperability(enabled);
    }

    public getConnectionState(): ConnectionStateType {
        return this.engine.getConnectionState();
    }

    public getCallId(): string {
        return this.engine.getCallId();
    }

    public rate(callId: string, rating: Rate, description?: string): void {
        this.engine.rate(callId, rating, description);
    }

    public complain(callId: string, description: string): void {
        this.engine.complain(callId, description);
    }

    public setLogFile(filePath: string): void {
        this.engine.setLogFile(filePath);
    }

    public setLogFilter(filter: LogFilter): void {
        this.engine.setLogFilter(filter);
    }

    public setLogFileSize(fileSizeInKBytes: number): void {
        this.engine.setLogFileSize(fileSizeInKBytes);
    }

    public setParameters(parameters: string): void {
        this.engine.setParameters(parameters);
    }

    public getUserInfoByUid(uid: number, user: UserInfo): number {
        return this.engine.getUserInfoByUid(uid, user);
    }

    public getUserInfoByUserAccount(userAccount: string, user: UserInfo): number {
        return this.engine.getUserInfoByUserAccount(userAccount, user);
    }

    public registerLocalUserAccount(appId: string, userAccount: string): void {
        this.engine.registerLocalUserAccount(appId, userAccount)
    }

    public joinChannelWithUserAccount(token: string | null, channelName: string, userAccount: string): void {
        this.engine.joinChannelWithUserAccount(token, channelName, userAccount)
    }

    public adjustPlaybackSignalVolume(volume: number): void {
        this.engine.adjustPlaybackSignalVolume(volume);
    }

    public adjustRecordingSignalVolume(volume: number): void {
        this.engine.adjustRecordingSignalVolume(volume)
    }

    public adjustUserPlaybackSignalVolume(uid: number, volume: number): void {
        this.engine.adjustUserPlaybackSignalVolume(uid, volume)
    }

    public disableAudio(): void {
        this.engine.disableAudio();
    }

    public enableAudio(): void {
        this.engine.enableAudio();
    }

    public enableAudioVolumeIndication(interval: number, smooth: number, report_vad: boolean): void {
        this.engine.enableAudioVolumeIndication(interval, smooth, report_vad);
    }

    public enableLocalAudio(enabled: boolean): void {
        this.engine.enableLocalAudio(enabled);
    }

    public muteAllRemoteAudioStreams(muted: boolean): void {
        this.engine.muteAllRemoteAudioStreams(muted);
    }

    public muteLocalAudioStream(muted: boolean): void {
        this.engine.muteLocalAudioStream(muted);
    }

    public muteRemoteAudioStream(uid: number, muted: boolean): void {
        this.engine.muteRemoteAudioStream(uid, muted);
    }

    public setAudioProfile(profile: AudioProfile, scenario: AudioScenario): void {
        this.engine.setAudioProfile(profile, scenario);
    }

    public setDefaultMuteAllRemoteAudioStreams(muted: boolean): void {
        this.engine.setDefaultMuteAllRemoteAudioStreams(muted);
    }

    public disableVideo(): void {
        this.engine.disableVideo();
    }

    public enableLocalVideo(enabled: boolean): void {
        this.engine.enableLocalVideo(enabled);
    }

    public enableVideo(): void {
        this.engine.enableVideo();
    }

    public muteAllRemoteVideoStreams(muted: boolean): void {
        this.engine.muteAllRemoteVideoStreams(muted);
    }

    public muteLocalVideoStream(muted: boolean): void {
        this.engine.muteLocalVideoStream(muted);
    }

    public muteRemoteVideoStream(uid: number, muted: boolean): void {
        this.engine.muteRemoteVideoStream(uid, muted);
    }

    public setBeautyEffectOptions(enabled: boolean, options: BeautyOptions): void {
        this.engine.setBeautyEffectOptions(enabled, options);
    }

    public setDefaultMuteAllRemoteVideoStreams(muted: boolean): void {
        this.engine.setDefaultMuteAllRemoteVideoStreams(muted);
    }

    // remark: review this code.
    public setVideoEncoderConfiguration(config: VideoEncoderConfiguration): number {

        return this.engine.setVideoEncoderConfiguration(new io.agora.rtc.video.VideoEncoderConfiguration(
            io.agora.rtc.video.VideoEncoderConfiguration.VD_640x360,
            io.agora.rtc.video.VideoEncoderConfiguration.FRAME_RATE.FRAME_RATE_FPS_15,
            config.bitrate,
            io.agora.rtc.video.VideoEncoderConfiguration.ORIENTATION_MODE.ORIENTATION_MODE_FIXED_PORTRAIT));

    }

    public startPreview(): void {
        this.engine.startPreview();
    }

    public stopPreview(): void {
        this.engine.stopPreview();
    }

    public adjustAudioMixingPlayoutVolume(volume: number): void {
        this.engine.adjustAudioMixingPlayoutVolume(volume);
    }

    public adjustAudioMixingPublishVolume(volume: number): void {
        this.engine.adjustAudioMixingPublishVolume(volume);
    }

    public adjustAudioMixingVolume(volume: number): void {
        this.engine.adjustAudioMixingVolume(volume);
    }

    public getAudioMixingCurrentPosition(): number {
        return this.engine.getAudioMixingCurrentPosition();
    }

    public getAudioMixingDuration(): number {
        return this.engine.getAudioMixingDuration();
    }

    public getAudioMixingPlayoutVolume(): number {
        return this.engine.getAudioMixingPlayoutVolume();
    }

    public getAudioMixingPublishVolume(): number {
        return this.engine.getAudioMixingPublishVolume();
    }

    public pauseAudioMixing(): void {
        this.engine.pauseAudioMixing();
    }

    public resumeAudioMixing(): void {
        this.engine.resumeAudioMixing();
    }

    public setAudioMixingPitch(pitch: number): void {
        this.engine.setAudioMixingPitch(pitch);
    }

    public setAudioMixingPosition(pos: number): void {
        this.engine.setAudioMixingPosition(pos);
    }

    public startAudioMixing(filePath: string, loopback: boolean, replace: boolean, cycle: number): void {
        this.engine.startAudioMixing(filePath, loopback, replace, cycle);
    }

    public stopAudioMixing(): void {
        this.engine.stopAudioMixing();
    }

    public setDefaultAudioRoutetoSpeakerphone(isSpeaker:boolean):void {
        this.engine.setDefaultAudioRoutetoSpeakerphone(isSpeaker);
    }

}