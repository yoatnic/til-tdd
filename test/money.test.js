'use strict';

const assert = require('power-assert');
const {Money} = require('../src/Money');

describe('MoneyTest', () => {
    it('multiplcation', () => {
        const five = Money.dollar(5);
        assert(Money.dollar(10).equals(five.times(2)));
        assert(Money.dollar(15).equals(five.times(3)));
    });

    it('equality', () => {
        assert(Money.dollar(5).equals(Money.dollar(5)));
        assert(Money.dollar(5).equals(Money.dollar(6)) === false);
        assert(Money.franc(5).equals(Money.franc(5)));
        assert(Money.franc(5).equals(Money.franc(6)) === false);
        assert(Money.dollar(5).equals(Money.franc(5)) === false);
    });

    it('franc multiplcation', () => {
        const five = Money.franc(5);
        assert(Money.franc(10).equals(five.times(2)));
        assert(Money.franc(15).equals(five.times(3)));
    });

    it('currency', () => {
        assert("USD" === Money.dollar(1).currency());
        assert("CHF" === Money.franc(1).currency());
    });
});
