const SHA256 = require("crypto-js/sha256")

module.exports = class Block {
        constructor (timestamp,transactions,previous_hash = '') {
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previous_hash = previous_hash;
        this.hash = '';
        this.nonce = 0;
    }
    calculateHash() {
       return SHA256(this.timestamp+this.previousHash+JSON.stringify(this.data)).toString();
    }
    mineNewBlock(difficulty) {
        while(this.hash.substring(0,difficulty) !== Array(difficulty + 1).join('0')){
            this.nonce++;    
            this.nonce = this.calculateHash();
        }
        console.log("New Block was mined", this.hash);
    }
}

