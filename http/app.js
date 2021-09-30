var http = require("http")  

http.createServer(function(req, res){
    res.end("Sim! Ele funciona sem internet")
}).listen(8081);
console.log("Ligou!")