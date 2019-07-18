const SHA256 = require("crypto-js/sha256")

class Block {
        constructor (index,timestamp,data,previous_hash = '') {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previous_hash = previous_hash;
        this.hash = '';
    }
    calculateHash() {
       return SHA256(this.index+this.timestamp+this.previousHash+JSON.stringify(this.data)).toString();
    }
}

