"use strict";
exports.__esModule = true;
exports.Transaction = void 0;
var Transaction = /** @class */ (function () {
    function Transaction(fromAddress, toAddress, amount) {
        this.fromAddress = fromAddress;
        this.toAddress = toAddress;
        this.amount = amount;
    }
    return Transaction;
}());
exports.Transaction = Transaction;
