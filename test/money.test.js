'use strict';

const assert = require('power-assert');
const Dollar = require('../src/Dollar');

describe('MoneyTest', () => {
    it('test multiplcation', () => {
        const five = new Dollar(5);
        five.times(2);
        assert(five.amount == 10);
    });
});
