import {httpGet, httpDelete, httpPost, httpOptions, httpPut, httpPatch, httpInitialize} from '../../../../dist/esm/src/module/main';
import assert from "assert";

describe('ESM importing test passed', () => {

    it('Check function type', () => {

        assert.strictEqual(typeof httpGet, 'function');
        assert.strictEqual(typeof httpDelete, 'function');
        assert.strictEqual(typeof httpPost, 'function');
        assert.strictEqual(typeof httpOptions, 'function');
        assert.strictEqual(typeof httpPatch, 'function');
        assert.strictEqual(typeof httpPut, 'function');
        assert.strictEqual(typeof httpInitialize, 'function');

    });

});
