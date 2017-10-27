'use strict';

const assert = require('power-assert');
const {Money} = require('../src/Money');
const {Bank} = require('../src/Bank');

describe('MoneyTest', () => {
    it('multiplcation', () => {
        const five = Money.dollar(5);
        assert(Money.dollar(10).equals(five.times(2)));
        assert(Money.dollar(15).equals(five.times(3)));
    });

    it('equality', () => {
        assert(Money.dollar(5).equals(Money.dollar(5)));
        assert(Money.dollar(5).equals(Money.dollar(6)) === false);
        assert(Money.dollar(5).equals(Money.franc(5)) === false);
    });

    it('currency', () => {
        assert("USD" === Money.dollar(1).currency());
        assert("CHF" === Money.franc(1).currency());
    });

    it('simple addtion', () => {
        const five = Money.dollar(5);
        const sum = five.plus(five);
        const bank = new Bank();
        const reduced = bank.reduce(sum, 'USD');
        assert(Money.dollar(10).equals(reduced));
    });
});
