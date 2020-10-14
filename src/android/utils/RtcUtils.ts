export class RtcUtils {

    public static channelName(myUid: string, peerUid: string): string {
        return myUid + peerUid;
    }
    
}