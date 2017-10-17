'use strict';

const assert = require('power-assert');
const Dollar = require('../src/Dollar');

describe('MoneyTest', () => {
    it('test multiplcation', () => {
        const five = new Dollar(5);
        let product = five.times(2);
        assert(product.amount === 10);
        product = five.times(3);
        assert(product.amount == 15);
    });
});
