class Money {
    constructor() {
    }

    equals(money) {
        return this._amount === money._amount;
    }
}

module.exports = Money;