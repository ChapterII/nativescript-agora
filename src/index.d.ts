import { Calling } from 'nativescript-agora/android/calling';
import { Common } from './agora.common';

export declare class Agora extends Common {
  initializeAgoraEngine(uiView?): void;
  initializeAgoraVoiceEngine(callback: (userId: number) => void): void;
  setupLocalVideo(): any;
  initRemoteVideo(relativeLayout): void;
  endCall(): void;
  onLocalAudioMuteClicked(): boolean;
  onSwitchCameraClicked(): void;
  onVideoMuteClicked(): boolean
  getCalling(): Calling
}
