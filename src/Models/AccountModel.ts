import EAccountStatus from "../Enums/EAccountStatus";

class AccountModel {
    Id: number;
    FirstName: string;
    LastName: string;
    Email: string;
    PhoneNumber: string;
    AmountDue: number;
    PaymentDueDate: Date;
    AccountStatusId: EAccountStatus;
    
    constructor(Id: number,
                FirstName: string, 
                LastName: string, 
                Email: string,
                PhoneNumber: string,
                AmountDue: number,
                PaymentDueDate: Date,
                AccountStatus: EAccountStatus) {
        this.Id = Id;
        this.FirstName = FirstName;
        this.LastName = LastName;
        this.Email = Email;
        this.PhoneNumber = PhoneNumber;
        this.AmountDue = AmountDue;
        this.AccountStatusId = AccountStatus;
        this.PaymentDueDate = PaymentDueDate;
    }
}

export default AccountModel;