import { Common } from './agora.common';

export declare class Agora extends Common {
  initializeAgoraEngine(uiView?): void;
  initializeAgoraVoiceEngine(): void;
  setupLocalVideo(): any;
  initRemoteVideo(relativeLayout): void;
  endCall(): void;
  onLocalAudioMuteClicked(): boolean;
  onSwitchCameraClicked(): void;
  onVideoMuteClicked(): boolean
}
