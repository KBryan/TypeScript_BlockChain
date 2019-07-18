class BlockChain {

    constructor() {
        // genesis block created manually
        this.chain = [this.createGenesisBlock()];
        this.difficulty = 7;
    }

    createGenesisBlock() {
        return new Block(0,"01/01/2018", "genesis block");

    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.mineNewBlock(this.difficulty);
        this.chain.push(newBlock);
    }
    checkIsBlockChainIsValid() {
        for (let i=1; 1 < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i-1];

            if(currentBlock.hash != currentBlock.calculateHash()) {
                return false;
            }
            if(currentBlock.previousHash != previousBlock.hash) {
                return hash;
            }
        }
        return true;
    }
}

    
