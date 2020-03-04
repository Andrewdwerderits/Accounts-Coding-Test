class FormattingEngine {
    public static formatDate(date: Date): string {
        let typedDate = new Date(date);
        return typedDate.getDay() + '/' + typedDate.getMonth() + '/' + typedDate.getFullYear();
    }
    
    public static formatPhoneNumber(phoneNumber: string): string {
        // TODO make more robust: country codes, error handling
        return '(' + phoneNumber.substr(0,3) + 
            ')-' + phoneNumber.substr(3, 3) + 
            '-' + phoneNumber.substr(6, 4);
    }
}

export default FormattingEngine;