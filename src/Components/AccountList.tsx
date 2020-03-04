import AccountModel from "src/Models/AccountModel";
import React from "react";
import EAccountStatus from "src/Enums/EAccountStatus";
import FormattingEngine from "src/Engines/FormattingEngine";

interface AccountListProps {
    accountModels: AccountModel[];
    accountType: EAccountStatus;
}

class AccountList extends React.Component<AccountListProps> {
    render() {
        let className = EAccountStatus[this.props.accountType].toLowerCase();
        let upperCaseClassName = EAccountStatus[this.props.accountType];

        return (
                <section className='account-column grid' id={`${className}-account-column`}>
                    <div className="account-container-title" id={`${className}-account-container-title`}>
                        <h3>{upperCaseClassName}</h3>
                    </div>
                    <div className={`account-container ${className}-account`}>
                        {this.props.accountModels.map((account: AccountModel) => {
                            if (account.PaymentDueDate == null) {
                                return (<ul className="account-data-list">
                                    <li><label>Name:</label>{`${account.LastName}, ${account.FirstName}`}</li>
                                    <li><label>Email:</label>{account.Email}</li>
                                    <li><label>Phone Number:</label>{FormattingEngine.formatPhoneNumber(account.PhoneNumber)}</li>
                                    <li><label>Amount Due:</label>${account.AmountDue}</li>
                                </ul>)
                            }
                            return (<ul className="account-data-list">
                                <li><label>Name:</label>{`${account.LastName}, ${account.FirstName}`}</li>
                                <li><label>Email:</label>{account.Email}</li>
                                <li><label>Phone Number:</label>{FormattingEngine.formatPhoneNumber(account.PhoneNumber)}</li>
                                <li><label>Amount Due:</label>${account.AmountDue}</li>
                                <li><label>Due Date:</label>{FormattingEngine.formatDate(account.PaymentDueDate)}</li>
                            </ul>)
                        })}
                    </div>
                </section>
        );
    }
}

export default AccountList;