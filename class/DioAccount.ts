// DioAccount.ts
export abstract class DioAccount {
    private readonly name: string;
    private readonly accountNumber: number;
    private balance: number = 0;
    private status: boolean = true;

    constructor(name: string, accountNumber: number) {
        this.name = name;
        this.accountNumber = accountNumber;
    }

    getName = (): string => {
        return this.name;
    }

    getAccountNumber = (): number => {
        return this.accountNumber;
    }

    getBalance = (): number => {
        return this.balance;
    }

    deposit = (amount: number): void => {
        if (this.validateStatus() && amount > 0) {
            this.balance += amount;
            console.log(`Você depositou ${amount}. Saldo atual: ${this.balance}`);
        }
    }

    withdraw = (amount: number): void => {
        if (this.validateStatus() && amount > 0 && this.balance >= amount) {
            this.balance -= amount;
            console.log(`Você sacou ${amount}. Saldo atual: ${this.balance}`);
        } else {
            console.log('Saque não permitido. Verifique o saldo ou o status da conta.');
        }
    }

    protected modifyBalance = (amount: number): void => {
        this.balance += amount;
    }
    
    protected validateStatus = (): boolean => {
        if (this.status) {
            return true;
        }   
        throw new Error('Conta inválida');
    }
}
