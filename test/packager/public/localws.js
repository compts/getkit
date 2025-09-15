
const main = gtk.initWs({"baseUrl": "ws://0.0.0.0:8080"});

main.onmessage = function(data) {
    console.log("Received message:", data);
}
main.send("Yahoo");