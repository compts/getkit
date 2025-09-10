
const main = gtk.initHttp({"baseUrl": "https://apis.codehyouka.xyz"});

const query = ` query {
                getProjectList(name: "structkit",version: "1_4_872") {
                    name
                    example
                    comment
                    return
                    arguments {
                        comment
                        name
                        type
                    }
                }
            }`;
main.post("/graphql", {
    data:{"query":query} ,
}).then( function(data) {

     console.log(data,"post");
})