const {Bank} = require('./Bank');

class Sum {
    constructor(augend, addend) {
        this.augend = augend;
        this.addend = addend;
    }

    reduce(bank, to) {
        const {Money} = require('./Money');
        const amount = this.augend.reduce(bank, to).amount +
            this.addend.reduce(bank, to).amount;
        return new Money(amount, to);
    }
}
exports.Sum = Sum;
