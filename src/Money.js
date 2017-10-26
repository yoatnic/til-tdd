class Money {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    equals(money) {
        return this._amount === money._amount &&
            this.currency() === money.currency();
    }

    times(multiplier) {
        return new Money(this._amount * multiplier, this._currency);
    }

    currency() {
        return this._currency;
    }

    static dollar(amount) {
        return new Money(amount, 'USD');
    }

    static franc(amount) {
        return new Money(amount, 'CHF');
    }
}

exports.Money = Money;