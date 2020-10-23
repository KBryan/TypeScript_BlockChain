"use strict";


import {Transaction} from "./Transaction";
import {BlockChain} from "./BlockChain";

const saneCoin = new BlockChain();

let transaction1 =  new Transaction("Sender", "Reciever",100);
saneCoin.createTransaction(transaction1);

let transaction2 =  new Transaction("Reciever", "Sender", 30);
saneCoin.createTransaction(transaction2);

console.log("mining started");
saneCoin.minePendingTransactions("Miner");