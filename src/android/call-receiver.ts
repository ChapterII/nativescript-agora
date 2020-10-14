import { Constants } from "./constants";

export class CallReceiver extends android.content.BroadcastReceiver {
    private static TAG: string = CallReceiver.class.getSimpleName();

    public onReceive(context: android.content.Context, intent: android.content.Intent): void {

        let subscriber = intent.getStringExtra(android.content.Intent.EXTRA_PHONE_NUMBER);

        if (this.shouldIntercept(context, subscriber)) {
            if (false) { // DialerActivity.running == true

                // TODO: review this code. It might be have a observation method. 
                // let agIntent = new android.content.Intent(context, DialerActivity.class);
                // agIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
                // agIntent.putExtra(Constants.CS_KEY_SUBSCRIBER, subscriber);
                // context.startActivity(agIntent);
            } else {
                // TODO: review this code. It might be have a observation method. 
                // Intent agIntent = new Intent(context, MainActivity.class);
                // agIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_SINGLE_TOP);
                // context.startActivity(agIntent);
            }
            super.setResultData(null);
        }
    }

    private shouldIntercept(context: android.content.Context, phoneNumber: string): boolean {

        // try {
        let arraPhoneNumber = new Array<string>();
        arraPhoneNumber.push(phoneNumber);

        let cursor = context.getContentResolver().query(
            android.provider.CallLog.Calls.CONTENT_URI,
            null, android.provider.CallLog.Calls.NUMBER + "=?", arraPhoneNumber,
            android.provider.CallLog.Calls.DATE + " DESC");

        let phoneAccountID = cursor.getColumnIndex(android.provider.CallLog.Calls.PHONE_ACCOUNT_ID);

        let shouldIntercept = false;
        while (cursor.moveToNext()) {

            let phoneAccID = cursor.getString(phoneAccountID);

            shouldIntercept = phoneAccID ==
                Constants.PA_LABEL_CALL_IN || phoneAccID ==
                Constants.PA_LABEL_CALL_OUT;

            if (shouldIntercept) break;
        }
        cursor.close();
        return shouldIntercept;
        // } catch (e: java.lang.SecurityException) {
        //     e.printStackTrace();
        //     return false;
        // }
        
    }
}