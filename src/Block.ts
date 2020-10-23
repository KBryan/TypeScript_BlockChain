const SHA256 = require("crypto-js/sha256");

export class Block {
    private timestamp:Date;
    private transactions:string;
    private previous_hash:string;
    private hash:string;
    private nonce:number;

        constructor (timestamp,transactions,previous_hash = '') {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previous_hash = previous_hash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    calculateHash(){
        // we will be using SHA256 cyptographic function to generate the hash of this block
        return SHA256(this.timestamp+this.previous_hash+JSON.stringify(this.transactions)+this.nonce).toString();
    }

    mineNewBlock(difficulty){
        while(this.hash.substring(0,difficulty) !== Array(difficulty + 1).join("0")){
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("A new block was mined with hash "+ this.hash);
    }
}

