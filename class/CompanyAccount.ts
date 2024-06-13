// CompanyAccount.ts
import { DioAccount } from "./DioAccount";

export class CompanyAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    getLoan = (amount: number): void => {
        if (this.validateStatus() && amount > 0) {
            this.deposit(amount);
            console.log(`Você pegou um empréstimo de ${amount}.`);
        } else {
            console.log('Empréstimo não permitido.');
        }
    }
}
