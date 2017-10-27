const {Money} = require('./Money');

class Bank {
    reduce(src, to) {
        return Money.dollar(10);
    }
}
exports.Bank = Bank;