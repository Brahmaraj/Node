const express = require("express");

const middlewear1 = (req, resp, next) => {
    console.log("Hellow this is middleware 1");
    next();
}

const middlewear2 = (req, resp, next) => {
    console.log("Hellow this is middleware 2");
    // next();
}

const server = express();
server.get("/",middlewear1,(req,resp)=>{
    resp.send({name:"Brahma"});
})

server.get("/user",(req,resp)=>{
    resp.send("<h1>Hello</h1>")
})

// server.use(middlewear1);
// server.use(middlewear2);

server.listen(8000);