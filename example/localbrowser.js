
const main = gtk.initialize({"baseUrl": "http://0.0.0.0:3000"});


gtk.nget("http://0.0.0.0:3000/api", {isJson:true,timeout:1000, setResponse:function(daa) { 
    
    daa.data = "gudnam";
    return daa;

 },
 onDownloadProgress:function(data) {

   //? console.log(data,"::onDownloadProgress")

 }}).then( function(data) {
    
     console.log(data,"yahoo");

})
.catch (function(data) {

    //? console.log(data,":::Error");

});

//const main = gtk.initialize({"baseUrl": "http://localhost:4040/"});

main.get("/api",{
    header:{}
}).then( function(data) {
    
    console.log(data,"get");

});



    main.post("/api").then( function(data) {
    
        console.log(data,"post");
    })