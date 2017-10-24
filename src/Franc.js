const {Money} = require('./Money');

class Franc extends Money {
    times(multiplier) {
        return Money.franc(this._amount * multiplier);
    }
}

exports.Franc = Franc;