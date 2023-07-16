const getkit = require("getkit");
const {Get, Delete, Post, Options, Put, Patch, initialize} = require("getkit");
const assert = require("assert");


describe('CJS importing test passed', () => {

    it('Check function type', () => {

        assert.strictEqual(typeof getkit, 'object');

        assert.strictEqual(typeof Get, 'function');
        assert.strictEqual(typeof Delete, 'function');
        assert.strictEqual(typeof Post, 'function');
        assert.strictEqual(typeof Options, 'function');
        assert.strictEqual(typeof Patch, 'function');
        assert.strictEqual(typeof Put, 'function');
        assert.strictEqual(typeof initialize, 'function');

    });

});
