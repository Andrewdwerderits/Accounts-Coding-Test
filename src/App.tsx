import React, {useEffect, useState} from 'react';
import './Styles/AccountStyles.css';
import AccountList from 'src/Components/AccountList';
import AccountEngine from "./Engines/AccountEngine";
import AccountModel from "./Models/AccountModel";
import EAccountStatus from "./Enums/EAccountStatus";

function App() {
  
  const [activeAccounts, setActiveAccounts] = useState<AccountModel[]>([]);
  const [inactiveAccounts, setInactiveAccounts] = useState<AccountModel[]>([]);
  const [overdueAccounts, setOverdueAccounts] = useState<AccountModel[]>([]);
  
  useEffect(() => {
    AccountEngine.GetAll()
        .then((accounts: AccountModel[]) => {
          let activeAccounts = (accounts.filter((account: AccountModel) => {
            return account.AccountStatusId === EAccountStatus.Active;
          }));

          let inactiveAccounts = (accounts.filter((account: AccountModel) => {
            return account.AccountStatusId === EAccountStatus.Inactive;
          }));

          let overdueAccounts = (accounts.filter((account: AccountModel) => {
            return account.AccountStatusId === EAccountStatus.Overdue;
          }));

          setActiveAccounts(activeAccounts);
          setInactiveAccounts(inactiveAccounts);
          setOverdueAccounts(overdueAccounts);
        });
  }, []);
  
  return (
    <div>
      <section>
        <header className="grid">
          <div className="title-container">
            <h1>Coding Test</h1>
          </div>
        </header>
        <main className="content grid" id="home-content">
          <div className="content-title-container">
            <h2>Accounts</h2>
          </div>
          <section className="grid" id="account-grid">
            <AccountList accountModels={activeAccounts} accountType={EAccountStatus.Active} key={0}/>
            <AccountList accountModels={overdueAccounts} accountType={EAccountStatus.Overdue} key={1} />
            <AccountList accountModels={inactiveAccounts} accountType={EAccountStatus.Inactive} key={2} />
          </section>
        </main>
        <footer className="grid">
          <p className="copy">&copy;<script>document.write(new Date().getFullYear())</script></p>
        </footer>
      </section>
    </div>
  );
}

export default App;
