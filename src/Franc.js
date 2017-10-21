const Money = require('./Money');

class Franc extends Money {
    constructor(amount) {
        super(...arguments);

        this._amount = amount;
    }

    times(multiplier) {
        return new Franc(this._amount * multiplier);
    }
}

module.exports = Franc;