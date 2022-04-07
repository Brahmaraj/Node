const http = require("http");
http.createServer(function(request,response){
    // response.write("Hello World");
    response.write("<h1>Heading 1</h1>");
    response.end();
}).listen(3000)