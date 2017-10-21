const Money = require('./Money');

class Dollar extends Money {
    constructor(amount) {
        super(...arguments);

        this._amount = amount;
    }

    times(multiplier) {
        return new Dollar(this._amount * multiplier);
    }
}

module.exports = Dollar;