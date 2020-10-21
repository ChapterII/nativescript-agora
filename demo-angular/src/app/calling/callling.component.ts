import { Component, OnInit } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
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

    ngOnInit(): void {
        

        // this.agora = new Agora();
        // this.agora.initializeAgoraVoiceEngine((userId: number) => {
        //     console.log("SAEB"+ userId);
        //     this.userId = userId;
        // });
    }


    switchCamera() {
        console.log("SAEB: switchCamera");

        // this..onSwitchCameraClicked();
    }

    hideVideo() {
        // this.isHideVideo = this.agora.onVideoMuteClicked();
    }

    endCall() {
        // this.agora.endCall();
    }


    onSendCall() {
        console.log("SAEB1:"+ this.code);

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