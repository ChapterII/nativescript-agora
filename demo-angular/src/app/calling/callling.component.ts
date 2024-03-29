import { Component, OnInit, ViewChild } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { Application, FlexboxLayout, Page, Placeholder, StackLayout } from "tns-core-modules";
import { RtcView } from "../../../../src/agora.android";
import { RtcEngine } from "../../../../src/android/rewrite/RtcEngine";
registerElement("RtcView", () => require("nativescript-agora").RtcView);


@Component({
    selector: 'calling',
    templateUrl: './calling.component.html',
    styleUrls: ['./calling.component.css']
})
export class CallingCommponent implements OnInit {

    // agora: Agora;
    userId: number;
    code: string;


    isMuted: boolean = false;
    isHideVideo: boolean = false;
    private isVideoHide: boolean = false;


    @ViewChild('RtcView', { static: true }) rtcView: RtcView;;

    constructor(private page: Page) {
    }


    // switchCamera(){
    //     alert('hi');
    // }

    ngOnInit(): void {



        // var label1 = new StackLayout();
        // label1.height = 200;
        // label1.backgroundColor = "red"
        // layout1.addChild(label1);

        // RtcEventHandler.on("onRemoteVideoStateChanged", (data) => {
        //     // const value = data.value;
        //     // if (value.state == io.agora.rtc.Constants.REMOTE_VIDEO_STATE_STOPPED) {
        //     //     //this.removeRemoteVideo(uid);
        //     // } else if (value.state == io.agora.rtc.Constants.REMOTE_VIDEO_STATE_DECODING) {
        //     //     console.log("User Decoding");
        //     //     this.setupRemoteVideo(value.uid);
        //     // }
        // });


        // RtcEventHandler.on("onRemoteVideoStateChanged",(data) => {
        //     const value = data.value;
        //         if (value.state == io.agora.rtc.Constants.REMOTE_VIDEO_STATE_STOPPED) {
        //             //this.removeRemoteVideo(uid);
        //         } else if (value.state == io.agora.rtc.Constants.REMOTE_VIDEO_STATE_DECODING) {
        //             console.log("User Decoding");
        //             this.setupRemoteVideo(value.uid);
        //         }

        // });

        // RtcEngine.on(RtcEngine.onRemoteVideoSetupChangeEvent, (data: any) => {
        //     if (this.streamMode == "remote") {

        //     }
        // });

        // var layout1 = <StackLayout>this.page.getViewById("Mycontainer");
        // var label = new StackLayout();
        // label.height = 200;
        // label.backgroundColor = "green"
        // layout1.addChild(label);

        // var label1 = new StackLayout();
        // label1.height = 200;
        // label1.backgroundColor = "red"
        // layout1.addChild(label1);


        // var layout: any = new Placeholder();

        // layout.on('creatingView', (args) => {
        //     var label = new StackLayout();
        //     label.height = 200;
        //     label.backgroundColor = "green"
        //     args.view = label;
        //     // this.nativeView.addView(args);  
        // });
        // layout.createNativeView();

        // layout1.addChild(layout);


        // this.agora = new Agora();
        // this.agora.initializeAgoraVoiceEngine((userId: number) => {
        //     console.log("SAEB"+ userId);
        //     this.userId = userId;
        // });
    }

    engine: RtcEngine;
    view: RtcView;

    public onLoadRtcEngine(args) {
        this.engine = args.engine;
        this.view = args.view;
    }

    switchCamera() {
        this.engine.switchCamera();
    }


    mute() {
        this.isMuted = !this.isMuted;
        this.engine.muteLocalAudioStream(this.isMuted);
        return this.isMuted;
    }

    hideVideo() {
        this.isVideoHide = !this.isVideoHide;

        if (this.isVideoHide) {
            this.view.removeLocalVideo();
            this.engine.enableLocalVideo(false);
        } else {
            this.engine.enableLocalVideo(true);
            this.view.setupLocalVideo();
        }
        return this.isVideoHide;
    }

    endCall() {
        this.engine.leaveChannel();
    }


    onSendCall() {
        console.log("SAEB1:" + this.code);

        // this.agora.getCalling().sendCall(this.code, "myDemo");
    }

    onCancelCall() {

    }

    onAnswerCall() {
        // this.agora.getCalling().answerCall();
    }

    onRejectCall() {

    }



}


