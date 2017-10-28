const {Expression} = require('./Expression');

class Sum {
    constructor(augend, addend) {
        this.augend = augend;
        this.addend = addend;
        Object.assign(Expression, this);
    }

    reduce(to) {
        const {Money} = require('./Money');
        const amount = this.augend.amount + this.augend.amount;
        return new Money(amount, to);
    }
}
exports.Sum = Sum;
