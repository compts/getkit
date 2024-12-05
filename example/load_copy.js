const {appServer, http} = require("fornetserve");
const fs = require('fs');

const apps = appServer();

const default_host = '0.0.0.0';
const default_port = 4040;

apps.get("/", async (req, res) => {

    res.status(200);
    const data = fs.readFileSync('./test1.html', 'utf8');

    res.content(data);

});


apps.get("/api", (req, res) => {

    res.status(200);

    res.content(JSON.stringify({"Yahooo":"asd", "method":"get"}));

});

apps.post("/api", (req, res) => {

    res.status(200);

    res.content(JSON.stringify({"Yahooo":"asd", "method":"post"}));

});

const connect =http(apps, {"host": default_host,
    "port": default_port,
    "static": {
        "dir": [
            "./*",
            "../dist/web/*"
        ]
    }
});

connect.then(() => {

    console.log("running");

}).catch( (err)=>{

    console.log(err);

})