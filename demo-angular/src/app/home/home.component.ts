import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, NgZone, OnDestroy, OnInit } from "@angular/core";
import { Agora } from "nativescript-agora";
import { Placeholder } from "tns-core-modules/ui/placeholder";
import * as application from "tns-core-modules/application";
import { isAndroid, isIOS, device, screen } from "tns-core-modules/platform";
import { Color, Page, ViewBase } from "tns-core-modules/ui/page";

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})

export class HomeComponent implements OnInit, OnDestroy {

    surfaceView: any;
    localFrameLayout: any;

    remoteRelativeLayout: any;
    remoteRelativeLayout2: any;

    agora: Agora;
    isMuted: boolean = false;
    isHideVideo: boolean = false;

    firstRemoteVideo: any = {};
    secondRemoteVideo: any = {};

    constructor(private cdr: ChangeDetectorRef, private ngZone: NgZone, private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.agora = new Agora();
    }

    onCreatingView(args) {
        if (isAndroid) {
            this.localFrameLayout = new android.widget.FrameLayout(application.android.context);
            args.view = this.localFrameLayout;
            this.agora.initializeAgoraEngine(this.localFrameLayout);
        } else {
            this.localFrameLayout = UIView.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));
            args.view = this.localFrameLayout;
            this.agora.initializeAgoraEngine(this.localFrameLayout);
        }

    }

    onCreatingRemoteView(args) {
        if (isAndroid) {
            this.remoteRelativeLayout = new android.widget.RelativeLayout(application.android.context);
            args.view = this.remoteRelativeLayout;
            this.agora.initRemoteVideo(this.remoteRelativeLayout);
        } else {
            this.remoteRelativeLayout = UIView.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));;
            args.view = this.remoteRelativeLayout;
            this.firstRemoteVideo = { uid: null, remoteView: this.remoteRelativeLayout,visible:true };
            this.agora.initRemoteVideo(this.firstRemoteVideo);
        }
    }

    onCreatingRemoteView2(args) {
        if (isAndroid) {
            this.remoteRelativeLayout2 = new android.widget.RelativeLayout(application.android.context);
            args.view = this.remoteRelativeLayout2;
            this.agora.initRemoteVideo(this.remoteRelativeLayout2);
        } else {

            this.remoteRelativeLayout2 = UIView.alloc().initWithFrame(CGRectMake(0, 0, 0, 0));;
            args.view = this.remoteRelativeLayout2;
            this.secondRemoteVideo = { uid: null, remoteView: this.remoteRelativeLayout2,visible:true };
            this.agora.initRemoteVideo(this.secondRemoteVideo);
        }
    }

    mute() {
        this.isMuted = this.agora.onLocalAudioMuteClicked();
    }

    switchCamera() {
        this.agora.onSwitchCameraClicked();
    }

    hideVideo() {
        this.isHideVideo = this.agora.onVideoMuteClicked();
    }

    endCall() {
        this.agora.endCall();
    }

    ngOnDestroy(): void {
        this.agora.endCall();
    }

    get secondVideoVisible(){
        console.log("Second Video Is Visible = " + this.secondRemoteVideo.visible);
        return this.secondRemoteVideo.visible;
    }
}
