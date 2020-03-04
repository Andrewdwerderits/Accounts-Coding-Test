import AccountModelMapper from "src/Mappers/AccountModelMapper";
import AccountModel from "../Models/AccountModel";

const api = 'https://frontiercodingtests.azurewebsites.net/api/accounts/';

const headers = {
    'Accept': 'application/json',
    // Add Authorization token here
    'Content-Type': 'application/json'
};

class AccountEngine {
    public static GetAll(): Promise<Array<AccountModel>> {
        let url = api + 'getall';
        
        return fetch(url,
            {
                method: 'GET',
                headers: headers,
                // Body arguments would go here
            })
            .then((response: any) => {
                return response.json()
            })
            .then ((data: any) => {
                return data.map((account: any) => {
                    return AccountModelMapper.entityToBusiness(account);
                });
            });
            // TODO error handling
            // .catch(() => {
            //    
            // });
    }
}

export default AccountEngine;