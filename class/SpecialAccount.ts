// SpecialAccount.ts
import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
    constructor(name: string, accountNumber: number) {
        super(name, accountNumber);
    }

    deposit = (amount: number): void => {
        if (this.validateStatus() && amount > 0) {
            const bonusAmount = amount + 10;
            this.modifyBalance(bonusAmount);
            console.log(`Você depositou ${amount}, mas recebeu um bônus de 10. Total depositado: ${bonusAmount}. Saldo atual: ${this.getBalance()}`);
        }
    }

    // Não é necessário definir modifyBalance novamente aqui
}
