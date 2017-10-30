const {Sum} = require('./Sum');

class Money {
    constructor(amount, currency) {
        this.amount = amount;
        this._currency = currency;
    }

    equals(money) {
        return this.amount === money.amount &&
            this.currency() === money.currency();
    }

    times(multiplier) {
        return new Money(this.amount * multiplier, this._currency);
    }

    currency() {
        return this._currency;
    }

    plus(addend) {
        return new Sum(this, addend);
    }

    reduce(bank, to) {
        const rate = bank.rate(this.currency(), to);
        return new Money(this.amount / rate, to);
    }

    static dollar(amount) {
        return new Money(amount, 'USD');
    }

    static franc(amount) {
        return new Money(amount, 'CHF');
    }
}

exports.Money = Money;