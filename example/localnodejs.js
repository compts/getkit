const gtk = require('../src/module/main');

//gtk.get("https://codehyouka.xyz/pfexp/frame/pf-ui/js/pf-ui.js").then( function(data) {
    
    //console.log(data,"Asd");
//})

//gtk.get("http://localhost:4040/api").then( function(data) {
    
//    console.log(data,"Asd");
//})

const main = gtk.httpInitialize({"baseUrl": "http://localhost:4040"});

main.get("api",{
    header:{}
}).then( function(data) {
    
    console.log(data,"get");

});



 //   main.post("/api").then( function(data) {
    
  //      console.log(data,"post");
 //   })