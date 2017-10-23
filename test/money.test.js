'use strict';

const assert = require('power-assert');
const MoneyFactory = require('../src/MoneyFactory');
const Dollar = require('../src/Dollar');
const Franc = require('../src/Franc');

describe('MoneyTest', () => {
    it('multiplcation', () => {
        const five = MoneyFactory.dollar(5);
        assert(MoneyFactory.dollar(10).equals(five.times(2)));
        assert(MoneyFactory.dollar(15).equals(five.times(3)));
    });

    it('equality', () => {
        assert(MoneyFactory.dollar(5).equals(MoneyFactory.dollar(5)));
        assert(MoneyFactory.dollar(5).equals(MoneyFactory.dollar(6)) === false);
        assert(MoneyFactory.franc(5).equals(MoneyFactory.franc(5)));
        assert(MoneyFactory.franc(5).equals(MoneyFactory.franc(6)) === false);
        assert(MoneyFactory.dollar(5).equals(MoneyFactory.franc(5)) === false);
    });

    it('franc multiplcation', () => {
        const five = MoneyFactory.franc(5);
        assert(MoneyFactory.franc(10).equals(five.times(2)));
        assert(MoneyFactory.franc(15).equals(five.times(3)));
    });
});
