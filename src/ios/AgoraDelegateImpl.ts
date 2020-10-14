import { getJSON } from "tns-core-modules/http";
import { TOKEN_AGORA } from "../agora.common";

interface AgoraRtcEngineDelegate extends NSObjectProtocol {

}
declare var AgoraRtcEngineDelegate: {
    prototype: AgoraRtcEngineDelegate;
};

declare var AgoraRtcVideoCanvas,
    AgoraVideoRenderMode,
    AgoraVideoRemoteState,
    AgoraVideoRemoteStateReason;

export class AgoraDelegateImpl extends NSObject implements AgoraRtcEngineDelegate {

    public static ObjCProtocols = [AgoraRtcEngineDelegate];

    static new(): AgoraDelegateImpl {
        return <AgoraDelegateImpl>super.new();
    }

    remoteVideos: Array<any> = [];
    agoraKit: any;


    rtcEngineFirstRemoteVideoDecodedOfUidSizeElapsed(engine: any, uid: number, size: CGSize, elapsed: number) {

    }

    rtcEngineDidOfflineOfUidReason(engine: any, uid: number, reason: any) {
    }

    rtcEngineRemoteVideoStateChangedOfUidStateReasonElapsed(engine, uid, state, reason, elapsed) {

        if (reason == AgoraVideoRemoteStateReason.AgoraVideoRemoteStateReasonRemoteMuted) {
            let remoteVideo = this.remoteVideos.find(remoteVideo => remoteVideo.uid == uid);
            if (remoteVideo) {
                remoteVideo.remoteView.hidden = true;
            }
        }
        else if (reason == AgoraVideoRemoteStateReason.AgoraVideoRemoteStateReasonRemoteUnmuted) {
            let remoteVideo = this.remoteVideos.find(remoteVideo => remoteVideo.uid == uid);
            if (remoteVideo) {
                remoteVideo.remoteView.hidden = false;
            }
        }
        else if (state == AgoraVideoRemoteState.AgoraVideoRemoteStateStopped) {
            let remoteVideo = this.remoteVideos.find(remoteVideo => remoteVideo.uid == uid);
            if (remoteVideo) {
                remoteVideo.remoteView.hidden = true;
                remoteVideo.uid = null;
            }

        } else if (state == AgoraVideoRemoteState.AgoraVideoRemoteStateStarting) {
            let remoteVideo = this.remoteVideos.find(remoteVideo => remoteVideo.uid == null);
            if (remoteVideo) {
                let videoCanvas = new AgoraRtcVideoCanvas();
                videoCanvas.uid = uid;
                remoteVideo.uid = uid;
                videoCanvas.view = remoteVideo.remoteView;
                videoCanvas.renderMode = AgoraVideoRenderMode.AgoraVideoRenderModeHidden;
                this.agoraKit.setupRemoteVideo(videoCanvas);
            }

        } else if (state == AgoraVideoRemoteState.AgoraVideoRemoteStateDecoding) {
            let remoteVideo = this.remoteVideos.find(remoteVideo => remoteVideo.uid == uid);
            if (remoteVideo) {
                remoteVideo.remoteView.hidden = false;
            }

        }
    }

    rtcEngineTokenPrivilegeWillExpire(engine, token) {
        getJSON(TOKEN_AGORA).then((res: any) => {
            this.agoraKit.renewToken(res.key);
        });
    }

}
