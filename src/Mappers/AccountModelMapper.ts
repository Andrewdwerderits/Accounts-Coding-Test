import AccountModel from 'src/Models/AccountModel';

class AccountModelMapper {
    
    // TODO error handling, cooercing data that doesn't fit this shape
    public static entityToBusiness = (entity: any): AccountModel => {
        let Id = entity.Id;
        let FirstName = entity.FirstName; 
        let LastName = entity.LastName;
        let Email = entity.Email;
        let PhoneNumber = entity.PhoneNumber;
        let AmountDue = entity.AmountDue;
        let AccountStatus = entity.AccountStatusId;
        let PaymentDueDate = entity.PaymentDueDate;
        return new AccountModel(Id, 
            FirstName,
            LastName, 
            Email, 
            PhoneNumber, 
            AmountDue, 
            PaymentDueDate,
            AccountStatus);
    }
    
    // Unused, but would be used for writing back to the server
    // public static businessToEntity = (accountModel: AccountModel): any => {
    //     return {
    //         Id: accountModel.Id,
    //         FirstName: accountModel.FirstName,
    //         LastName: accountModel.LastName,
    //         Email: accountModel.Email,
    //         PhoneNumber: accountModel.PhoneNumber,
    //         AmountDue: accountModel.AmountDue
    //     }
    // }
}

export default AccountModelMapper;