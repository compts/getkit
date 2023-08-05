import {httpGet, httpDelete, httpPost, httpOptions, httpPut, httpPatch, httpInitialize} from '../../../../dist/esm/src/module/main';
import {expectType} from 'tsd';
import assert from "assert";

describe('TS importing test passed', () => {

    it('Check function type', () => {

        assert.strictEqual(typeof httpGet, 'function');
        assert.strictEqual(typeof httpDelete, 'function');
        assert.strictEqual(typeof httpPost, 'function');
        assert.strictEqual(typeof httpOptions, 'function');
        assert.strictEqual(typeof httpPatch, 'function');
        assert.strictEqual(typeof httpPut, 'function');
        assert.strictEqual(typeof httpInitialize, 'function');

    });
    it('check expected type', function () {

        expectType<Promise<any>>(httpGet('https://example.com'));
        expectType<Promise<any>>(httpDelete('https://example.com'));
        expectType<Promise<any>>(httpPost('https://example.com'));
        expectType<Promise<any>>(httpOptions('https://example.com'));
        expectType<Promise<any>>(httpPatch('https://example.com'));
        expectType<Promise<any>>(httpPut('https://example.com'));
        expectType<any>(httpInitialize({"baseUrl": "http://localhost:4040/"}));

    });

});
