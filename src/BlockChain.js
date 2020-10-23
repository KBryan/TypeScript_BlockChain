"use strict";
exports.__esModule = true;
exports.BlockChain = void 0;
var Block_1 = require("./Block");
var Transaction_1 = require("./Transaction");
var BlockChain = /** @class */ (function () {
    function BlockChain() {
        // genesis block created manually
        console.log('BlockChain Constructor');
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 1;
        this.pendingTransactions = [];
        this.miningReward = 10;
    }
    BlockChain.prototype.createGenesisBlock = function () {
        return new Block_1.Block(Date.now(), "genesis block", "0");
    };
    BlockChain.prototype.getLatestBlock = function () {
        return this.chain[this.chain.length - 1];
    };
    BlockChain.prototype.minePendingTransactions = function (miningRewardAddress) {
        var block = new Block_1.Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
        block.mineNewBlock(this.difficulty);
        console.log("Mine Success");
        this.chain.push(block);
        this.pendingTransactions = [
            new Transaction_1.Transaction(null, miningRewardAddress, this.miningReward)
        ];
    };
    BlockChain.prototype.createTransaction = function (transaction) {
        this.pendingTransactions.push(transaction);
    };
    BlockChain.prototype.getBalanceOfAddress = function (address) {
        var balance = 0;
        for (var _i = 0, _a = this.chain; _i < _a.length; _i++) {
            var block = _a[_i];
            for (var _b = 0, _c = block.transactions; _b < _c.length; _b++) {
                var trans = _c[_b];
                if (trans.fromAddress === address) {
                    balance = balance - trans.amount;
                }
                if (trans.toAddress === address) {
                    balance = balance + trans.amount;
                }
            }
        }
        return balance;
    };
    BlockChain.prototype.checkIsBlockChainIsValid = function () {
        for (var i = 1; 1 < this.chain.length; i++) {
            var currentBlock = this.chain[i];
            var previousBlock = this.chain[i - 1];
            if (currentBlock.hash != currentBlock.calculateHash()) {
                return false;
            }
            if (currentBlock.previousHash != previousBlock.hash) {
                return false;
            }
        }
        return true;
    };
    return BlockChain;
}());
exports.BlockChain = BlockChain;
