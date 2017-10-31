'use strict';

const assert = require('power-assert');
const {Money} = require('../src/Money');
const {Bank} = require('../src/Bank');
const {Sum} = require('../src/Sum');

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

    it('plus returns Sum', () => {
        const five = Money.dollar(5);
        const result = five.plus(five);
        assert(five.equals(result.augend));
        assert(five.equals(result.addend));
    });

    it('reduce Sum', () => {
        const sum = new Sum(Money.dollar(3), Money.dollar(4));
        const bank = new Bank();
        const result = bank.reduce(sum, 'USD');
        assert(Money.dollar(7).equals(result));
    });

    it('reduce Money', () => {
        const bank = new Bank();
        const result = bank.reduce(Money.dollar(1), 'USD');
        assert(Money.dollar(1).equals(result));
    });

    it('reduce Money differend currency', () => {
        const bank = new Bank();
        bank.addRate('CHF', 'USD', 2);
        const result = bank.reduce(Money.franc(2), 'USD');
        assert(Money.dollar(1).equals(result));
    });

    it('identity rate', () => {
        assert(1 === new Bank().rate('USD', 'USD'));
    });

    it('mixed addition', () => {
        const fiveBucks = Money.dollar(5);
        const tenFrancs = Money.franc(10);
        const bank = new Bank();
        bank.addRate('CHF', 'USD', 2);
        const result = bank.reduce(fiveBucks.plus(tenFrancs), 'USD');
        assert(Money.dollar(10).equals(result));
    });
});
