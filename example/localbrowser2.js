
const main = gtk.initHttp({"baseUrl": "https://apis.codehyouka.xyz"});



let templ1 = ' query {';
templ1 += ' getDocCatList(name: "structkit",version: "main") {';
templ1 += '         category';
templ1 += '         pages {';
templ1 += '             title';
templ1 += '             link';
templ1 += '         }';
templ1 += '     }';
templ1 += ' }';
main.post("/graphql", {data:{query:templ1}}).then(function(data) {
    
    console.log(data,"post");
})





let templ2 = ' query {'; 
templ2 += 'getProjectList(name: "structkit",version: "1_4_873") {'; 
templ2 += '          name'; 
templ2 +=  '         example'; 
templ2 +=  '         comment'; 
templ2 +=  '         return'; 
templ2 +=  '         arguments {'; 
templ2 +=  '             comment'; 
templ2 +=  '             name'; 
templ2 +=  '             type'; 
templ2 +=  '         }'; 
templ2 +=  '     }'; 
templ2 +=  ' }'; 
setTimeout(function(){
main.post("/graphql", {data:{query:templ2}}).then(function(data) {
    
    console.log(data,"post2");
})
},1500)