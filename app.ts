// app.ts
import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SpecialAccount } from './class/SpecialAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Rodrigo', 10);
console.log(peopleAccount);
peopleAccount.deposit(100);
peopleAccount.withdraw(50);

const companyAccount: CompanyAccount = new CompanyAccount('Dio', 20);
companyAccount.deposit(200);
companyAccount.getLoan(500);
companyAccount.withdraw(100);

const specialAccount: SpecialAccount = new SpecialAccount('Ana', 30);
specialAccount.deposit(100);
specialAccount.withdraw(50);
