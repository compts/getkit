const {startServer, listenServer} = require("../packager/server");

const server = startServer();

listenServer(server, 2000);
