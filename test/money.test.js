'use strict';

const assert = require('power-assert');
const Dollar = require('../src/Dollar');
const Franc = require('../src/Franc');

describe('MoneyTest', () => {
    it('multiplcation', () => {
        const five = new Dollar(5);
        assert(new Dollar(10).equals(five.times(2)));
        assert(new Dollar(15).equals(five.times(3)));
    });

    it('equality', () => {
        assert(new Dollar(5).equals(new Dollar(5)));
        assert(new Dollar(5).equals(new Dollar(6)) === false);
        assert(new Franc(5).equals(new Franc(5)));
        assert(new Franc(5).equals(new Franc(6)) === false);
    });

    it('franc multiplcation', () => {
        const five = new Franc(5);
        assert(new Franc(10).equals(five.times(2)));
        assert(new Franc(15).equals(five.times(3)));
    });
});
