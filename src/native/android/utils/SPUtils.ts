import { Constants } from "../constants";

export class SPUtils {

    public static saveUserId(context: android.content.Context, id: string): void {
        let pf = context.getSharedPreferences(Constants.SP_NAME, android.content.Context.MODE_PRIVATE);
        pf.edit().putString(Constants.PREF_USER_ID, id).apply();
    }

    public static getUserId(context: android.content.Context): string {
        let pf = context.getSharedPreferences(Constants.SP_NAME, android.content.Context.MODE_PRIVATE);
        return pf.getString(Constants.PREF_USER_ID, null);
    }
    
}