export class Transaction {

    private fromAddress:string;
    private toAddress:string;
    private amount:number;

    constructor(fromAddress:string, toAddress:string, amount:number) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
}
