const Dollar = require('./Dollar');
const Franc = require('./Franc');

class MoneyFactory {
    static dollar(amount) {
        return new Dollar(amount);
    }

    static franc(amount) {
        return new Franc(amount);
    }
}

module.exports = MoneyFactory;
