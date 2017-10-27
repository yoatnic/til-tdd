const {Expression} = require('./Expression');

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

    plus(added) {
        return Object.assign(new Expression(),
            new Money(this.amount + added.amount, this._currency)
        );
    }

    static dollar(amount) {
        return new Money(amount, 'USD');
    }

    static franc(amount) {
        return new Money(amount, 'CHF');
    }
}

exports.Money = Money;