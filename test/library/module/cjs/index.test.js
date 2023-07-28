const getkit = require("getkit");
const {httpGet, httpDelete, httpPost, httpOptions, httpPut, httpPatch, httpInitialize} = require("getkit");
const assert = require("assert");


describe('CJS importing test passed', () => {

    it('Check function type', () => {

        assert.strictEqual(typeof getkit, 'object');

        assert.strictEqual(typeof httpGet, 'function');
        assert.strictEqual(typeof httpDelete, 'function');
        assert.strictEqual(typeof httpPost, 'function');
        assert.strictEqual(typeof httpOptions, 'function');
        assert.strictEqual(typeof httpPatch, 'function');
        assert.strictEqual(typeof httpPut, 'function');
        assert.strictEqual(typeof httpInitialize, 'function');

    });

});
