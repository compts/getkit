
const main = gtk.httpInitialize({"baseUrl": "http://localhost:4040"});


gtk.httpGet("http://localhost:4040/api", {isJson:true,timeout:1000, setResponse:function(daa) { 
    
    daa.data = "gudnam";
    return daa;

 },
 onDownloadProgress:function(data) {

    console.log(data,"::onDownloadProgress")

 }}).then( function(data) {
    
    console.log(data,"yahoo");

})
.catch (function(data) {

    console.log(data,":::Error");

});
