const WebSocket = require('ws');

// Create a WebSocket server on port 8080
const wss = new WebSocket.Server({ port: 8080 });

// Event listener for new connections
wss.on('connection', function connection(ws) {
  console.log('Client connected');

  // Send a "Hello World!" message to the client every second
  const interval = setInterval(() => {
    ws.send('Hello World!');
  }, 1000);

  // Event listener for messages from the client (optional)
  ws.on('message', function incoming(message) {
    console.log('Received from client: %s', message);
  });

  // Event listener for client disconnections
  ws.on('close', () => {
    console.log('Client disconnected');
    clearInterval(interval); // Clear the interval when the client disconnects
  });

  // Event listener for errors
  ws.onerror = function () {
    console.log('Some Error occurred');
  };
});

console.log('WebSocket server started on port 8080');