import { Component, OnInit } from "@angular/core";
import { Agora } from "nativescript-agora";
// import { Agora } from "nativescript-agora";

@Component({
    selector: 'calling',
    templateUrl: './calling.component.html',
    styleUrls: ['./calling.component.css']
})
export class CallingCommponent implements OnInit {

    agora: Agora;
    userId: number;
    code: string;

    ngOnInit(): void {
        this.agora = new Agora();
        this.agora.initializeAgoraVoiceEngine((userId: number) => {
            console.log("SAEB"+ userId);
            this.userId = userId;
        });
    }



    onSendCall() {
        console.log("SAEB1:"+ this.code);

        this.agora.getCalling().sendCall(this.code, "myDemo");
    }

    onCancelCall() {

    }

    onAnswerCall() {
        this.agora.getCalling().answerCall();
    }

    onRejectCall() {

    }


}