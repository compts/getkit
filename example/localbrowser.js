
const main = gtk.initialize({"baseUrl": "http://localhost:4040"});

main.get("/api").then( function(data) {
    
    console.log(data,"get");

});

setTimeout( function() {

    main.post("/api",{"data":{"test":"s"}}).then( function(data) {
    
        console.log(data,"post");
    })

},10 );


gtk.Get("https://localhost:4040/index.php/yahooo").then( function(data) {
    
    console.log(data,"yahoo");

})
.catch (function(data) {

    console.log(data,":::Error");

});
