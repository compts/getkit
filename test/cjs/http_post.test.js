const {npost} = require("../../src/module/main");
const {startServer, listenServer, stopServer} = require("../packager/server");
// Let request = require("supertest");


const assert = require("assert");
const server = startServer();


const host = "http://0.0.0.0:3001/";

describe('CJS: NPOST than method', function () {

    listenServer(server, 3001);
    // Const request_test = request(server);

    it('should return a response for a valid GET request', async function () {

        const response = await npost(host);

        assert(response, "Expected a response object");

    });

    it('should throw an error for an invalid URL', async function () {

        try {

            await npost("http://invalidhost:9999/");
            assert.fail("Expected error was not thrown");

        } catch (err) {

            assert(err, "Expected an error to be thrown");

        }

    });

    it('should return status 200 for a valid endpoint', async function () {

        const response = await npost(host);

        assert.strictEqual(response.status, 200, "Expected status 200");

    });

    it('should return JSON data if endpoint returns JSON', async function () {

        const response = await npost(host + "api", {"isJson": true});

        assert(response.header['content-type'].includes('application/json'), "Expected JSON response");
        const {data} = response;

        assert(data, "Expected response data");

    });


});
