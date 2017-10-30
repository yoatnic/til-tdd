const {Money} = require('./Money');
const {Rates} = require('./Rates');
const {Pair} = require('./Pair');

class Bank {
    constructor() {
        this._rates = new Rates();
    }

    reduce(src, to) {
        return src.reduce(this, to);
    }

    addRate(from, to, rate) {
        this._rates.put(new Pair(from, to), rate);
    }

    rate(from, to) {
        return this._rates.getRate(new Pair(from, to));
    }
}
exports.Bank = Bank;