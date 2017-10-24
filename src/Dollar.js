const {Money} = require('./Money');

class Dollar extends Money {
    times(multiplier) {
        return Money.dollar(this._amount * multiplier);
    }
}

exports.Dollar = Dollar;