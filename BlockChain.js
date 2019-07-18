class BlockChain {
    
    constructor() {
        // genesis block created manually
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0,"01/01/2018", "genesis block");

    }
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
    addBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.calculateHash();
        this.chain.push(newBlock);
    }

    }
    // create the blocks
    let block1 = new Block(1,"02/01/2018", {mybalance : 100});
    let block2 = new Block(2,"03/01/2018", {mybalance : 50});
    // create a myBlockchain Object
    let myBlockChain = new BlockChain();
    // add the block to the blockchain
    myBlockChain.addBlock(block1);
    myBlockChain.addBlock(block2);

    console.log(JSON.stringify(myBlockChain.createGenesisBlock(),null,4));