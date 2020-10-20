import { Observable } from "tns-core-modules/";
import { Property } from "tns-core-modules/ui/core/properties";
import { ChannelProfile, ClientRole } from "./Enum";

export class RtcEngineCommon extends Observable {

    clientRole: ClientRole;
    channelProfile: ChannelProfile;

}


export const channelProfileProperty = new Property({
    name: "channelProfile"
});

export const clientRoleProperty = new Property({
    name: "clientRole"
});

