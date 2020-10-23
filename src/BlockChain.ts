import {Block} from "./Block";
import {Transaction} from "./Transaction";

export class BlockChain {

    private chain:Array<any>;
    private difficulty:number;
    private pendingTransactions:Array<any>;
    private miningReward:number;

    constructor() {
        // genesis block created manually
        console.log('BlockChain Constructor');
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 1;
        this.pendingTransactions = [];
        this.miningReward = 10;
    }

    createGenesisBlock() {
        return new Block(Date.now(), "genesis block","0");
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    minePendingTransactions(miningRewardAddress) {
        let block:Block = new Block(Date.now(), this.pendingTransactions, this.getLatestBlock().hash);
        block.mineNewBlock(this.difficulty);
        console.log("Mine Success");
        this.chain.push(block);
        this.pendingTransactions = [
            new Transaction(null,miningRewardAddress,this.miningReward)
        ];
    }
    
    createTransaction(transaction) {
        this.pendingTransactions.push(transaction);
    }

    getBalanceOfAddress(address) {
        let balance:number =0;
        for(const block of this.chain) {
            for (const trans of block.transactions) {
                if(trans.fromAddress === address) {
                    balance = balance-trans.amount;
                }
                if(trans.toAddress === address) {
                    balance = balance+trans.amount;
                }
            }
        }
        return balance;
    }

    checkIsBlockChainIsValid() {
        for (let i:number=1; 1 < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if(currentBlock.hash != currentBlock.calculateHash()) {
                return false;
            }
            if(currentBlock.previousHash != previousBlock.hash) {
                return false;
            }
        }
        return true;
    }
}

    
