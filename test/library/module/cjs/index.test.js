const getkit = require("getkit");
const {nget, ndelete, npost, noptions, nput, npatch, initialize} = require("getkit");
const assert = require("assert");


describe('CJS importing test passed', () => {

    it('Check function type', () => {

        assert.strictEqual(typeof getkit, 'object');

        assert.strictEqual(typeof nget, 'function');
        assert.strictEqual(typeof ndelete, 'function');
        assert.strictEqual(typeof npost, 'function');
        assert.strictEqual(typeof noptions, 'function');
        assert.strictEqual(typeof nput, 'function');
        assert.strictEqual(typeof npatch, 'function');
        assert.strictEqual(typeof initialize, 'function');

    });

});
