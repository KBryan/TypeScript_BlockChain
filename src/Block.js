"use strict";
exports.__esModule = true;
exports.Block = void 0;
var SHA256 = require("crypto-js/sha256");
var Block = /** @class */ (function () {
    function Block(timestamp, transactions, previous_hash) {
        if (previous_hash === void 0) { previous_hash = ''; }
        this.timestamp = timestamp;
        this.transactions = transactions;
        this.previous_hash = previous_hash;
        this.hash = this.calculateHash();
        this.nonce = 0;
    }
    Block.prototype.calculateHash = function () {
        // we will be using SHA256 cyptographic function to generate the hash of this block
        return SHA256(this.timestamp + this.previous_hash + JSON.stringify(this.transactions) + this.nonce).toString();
    };
    Block.prototype.mineNewBlock = function (difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.calculateHash();
        }
        console.log("A new block was mined with hash " + this.hash);
    };
    return Block;
}());
exports.Block = Block;
