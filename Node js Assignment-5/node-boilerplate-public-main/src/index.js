var http = require("http");

const httpServer = http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{"Content-type":"text/plain"});
        res.write("Hello World");
        res.end();
    }
    //I used landing page so that it will look good.............
    else if(req.url=="/welcome")
    {
        res.writeHead(200,{"Content-type":"text/plain"});
        res.write("Welcome to dominos!");
        res.end();
    }
    else if(req.url=="/contact")
    {
        res.writeHead(200,{"Content-type":"text/json"});
        res.write(
            JSON.stringify(
                {
                    phone: '18602100000', 
                    email: 'guestcaredominos@jublfood.com' 
              
                }
            )
        )
        res.end();
    }
    else
    {
        res.writeHead(404,{"Content-type":"text/plain"});
        res.write("page not found");
        res.end();

    }
});
httpServer.listen(8081,()=>{console.log("Server is up at 8081")})


