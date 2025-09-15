/* eslint-disable no-magic-numbers */
/* eslint-disable require-jsdoc */
const http = require('http');
const fs = require('fs');
const https = require('https'); // For HTTPS server

const {isUrlExtValid} = require('url-assist');

function assetJS(req, res,file){

    fs.readFile(process.cwd()+"/test/packager/public/"+file, 'utf8', (__, data) => {


                res.writeHead(200, {'Content-Type': 'text/javascript'});
                res.end(data);

            });
}
const routes = {
    'GET': {
        "/index": (req, res) => {

            fs.readFile(process.cwd()+"/test/packager/public/test1.html", 'utf8', (__, data) => {


                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);

            });

        },
        "/index2": (req, res) => {

            fs.readFile(process.cwd()+"/test/packager/public/test2.html", 'utf8', (__, data) => {


                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);

            });

        },
         "/ws1": (req, res) => {

            fs.readFile(process.cwd()+"/test/packager/public/ws1.html", 'utf8', (__, data) => {


                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);

            });

        },
        '/': (req, res) => {

            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello, world!');

        },
        '/api': (req, res) => {

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({"received": "body"}));

        },
        '/about': (req, res) => {

            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('About page');

        }
    },
    'POST': {
        '/': (req, res) => {

            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end('Hello, world!');

        },
        '/data': (req, res) => {

            let body = '';

            req.on('data', (chunk) => {

                body += chunk;

            });
            req.on('end', () => {

                res.writeHead(200, {'Content-Type': 'application/json'});
                res.end(JSON.stringify({"received": body}));

            });

        },
        '/api': (req, res) => {

            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({"received": "body"}));

        }
    }
};

function startServer () {

    const server = http.createServer((req, res) => {

        const {method} = req;
        const {url} = req;

        const clientHost = req.headers.host;
        const protocol = req.socket.encrypted
            ? 'https'
            : 'http';

      //  console.log(clientHost, ":clientHost", protocol);
      //  console.log(protocol+"://"+clientHost+url, "::url", isUrlExtValid(protocol+"://"+clientHost+url,"js"));
        if (isUrlExtValid(protocol+"://"+clientHost+url,"js")){

            assetJS(req, res,url);
            return server;
        }

        if (routes[method] && routes[method][url]) {

            routes[method][url](req, res);

        } else {

            res.writeHead(404, {'Content-Type': 'text/plain'});
            res.end('Not Found');

        }

    });

    return server;

}

exports.startServer = startServer;


function listenServer (server, port) {

    server.listen(port, () => {

        console.log('Server running at http://localhost:'+port);

    });

}

exports.listenServer = listenServer;


function stopServer (server) {

    if (server) {

        if (typeof server.closeAllConnections === 'function') {

            server.closeAllConnections();

        }

        server.close();

    }

}

exports.stopServer = stopServer;
