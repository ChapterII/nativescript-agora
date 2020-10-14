import * as appModule from "tns-core-modules/application";

export class DiallerRingtone {

    private mPlayer: android.media.MediaPlayer;

    constructor() { }

    private getUri(fileName: string) {

        return new android.net.Uri.Builder()
            .scheme(android.content.ContentResolver.SCHEME_ANDROID_RESOURCE)
            .authority(appModule.android.nativeApp.getPackageName())
            .appendPath("raw")
            .appendPath(fileName)
            .build();
            
    }

    public Play(fileName: string): android.media.MediaPlayer {

        const resource = this.getUri(fileName);
        let player = android.media.MediaPlayer.create(appModule.android.context, resource);
        player.setLooping(true);
        player.start();
        return player;

    }

    public Stop(): void {

        if (this.mPlayer != null && this.mPlayer.isPlaying()) {
            this.mPlayer.stop();
            this.mPlayer.release();
            this.mPlayer = null;
        }

    }

}