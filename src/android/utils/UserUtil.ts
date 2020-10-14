export class UserUtil {

    private static MAX_ID_NUMBER: number = 9999;

    public static randomUserId(): string {
        let number = new java.util.Random().nextInt(this.MAX_ID_NUMBER);
        let id = "";
        if (number < 1000) {
            id += "0";
        }

        if (number < 100) {
            id += "0";
        }

        if (number < 10) {
            id += "0";
        }

        return id + number;
    }
}