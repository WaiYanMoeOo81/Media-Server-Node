let http=require('http');
//const { resolve } = require('path');
let url=require('url');
require('dotenv').config();
let route={
    "GET":{
        "/":(req,res)=>{
            res.writeHead(200,{'Content-type':'text/html'});
            res.end("<h1>Get Method => / route </h1>");
            
        },
        "/home":(req,res)=>{
            res.writeHead(200,{'Content-type':'text/html'});
            res.end("<h1>Get Method => /home route </h1>");
            
        },
    },
    "POST":{
        "/":(req,res)=>{
            res.writeHead(200,{'Content-type':'text/html'});
            res.end("<h1>POST Method => / route </h1>");
            
        },
        "/about":(req,res)=>{
            res.writeHead(200,{'Content-type':'text/html'});
            res.end("<h1>POST Method => /about route </h1>");
            
        },
    },
    "NA":(req,res)=>{
        res.writeHead(404);
        res.end("<h1>No page found for Route </h1>");
    }

}

let start=(req,res)=>{
    
   let reqMethod=req.method;
   let params=url.parse(req.url,true);
   let name=params.query.name;
   let age=params.query.age;
   console.log("Name : "+name + " Age : "+age);
   let resolveroute=route[reqMethod][params.pathname];
   if(resolveroute !=null && resolveroute!=undefined){
       resolveroute(req,res);
   }else{
       route['NA'](req,res);
   }

}

let server=http.createServer(start);

server.listen(process.env.PORT,()=>{
    console.log(`server is running at port ${process.env.PORT}`);
})