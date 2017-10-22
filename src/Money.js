class Money {
    constructor() {
    }

    equals(money) {
        return this._amount === money._amount &&
            this.constructor.name === money.constructor.name;
    }
}

module.exports = Money;