const {Get, Delete, Post, Put, Patch} = require("../../../src/module/main.js");
const assert = require("assert");

const {appServer, http} = require("fornetserve");

const apps = appServer();

const default_host = '0.0.0.0';
const default_port = 4040;

const defaultUrl = "http://"+default_host+":"+default_port;

const twohundred = 200;

describe('request', function () {

    apps.get("/", (req, res) => {

        res.status(twohundred);
        res.content("Hello this is GET");

    });

    apps.post("/", (req, res) => {

        res.status(twohundred);
        res.content("Hello this is Post");

    });

    apps.delete("/", (req, res) => {

        res.status(twohundred);
        res.content("Hello this is Delete");

    });

    apps.patch("/", (req, res) => {

        res.status(twohundred);
        res.content("Hello this is Patch");

    });

    apps.put("/", (req, res) => {

        res.status(twohundred);
        res.content("Hello this is Put");

    });

    const connect =http(apps, {"host": default_host,
        "port": default_port});

    connect.then(() => {

        console.log("running");

    }).catch((err) => {

        console.log(err);

    });


    it('GET request', function (done) {

        Get(defaultUrl).then((data) => {

            assert.strictEqual(data.data, "Hello this is GET");
            assert.strictEqual(data.status, twohundred);
            done();

        });

    });

    it('Delete request', function (done) {

        Delete(defaultUrl).then((data) => {

            assert.strictEqual(data.data, "Hello this is Delete");
            assert.strictEqual(data.status, twohundred);
            done();

        });

    });

    it('Post request', function (done) {

        Post(defaultUrl).then((data) => {

            assert.strictEqual(data.data, "Hello this is Post");
            assert.strictEqual(data.status, twohundred);
            done();

        });

    });
    it('Put request', function (done) {

        Put(defaultUrl).then((data) => {

            assert.strictEqual(data.data, "Hello this is Put");
            assert.strictEqual(data.status, twohundred);
            done();

        });

    });

    it('Patch request', function (done) {

        Patch(defaultUrl).then((data) => {

            assert.strictEqual(data.data, "Hello this is Patch");
            assert.strictEqual(data.status, twohundred);
            done();

        });

    });

});
