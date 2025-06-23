const http = require('http');

const routes = {
    'GET': {
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

const server = http.createServer((req, res) => {

    const {method} = req;
    const {url} = req;

    if (routes[method] && routes[method][url]) {

        routes[method][url](req, res);

    } else {

        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Not Found');

    }

});

server.listen(3000, () => {

    console.log('Server running at http://localhost:3000/');

});
