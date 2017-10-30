class Rates {
    constructor() {
        this._rates = {}
    }

    put(pair, rate) {
        this._rates[pair.val()] = rate;
    }

    getRate(pair) {
        if (pair.from === pair.to) return 1;
        return this._rates[pair.val()];
    }
}

exports.Rates = Rates;