var http = require("http")  

http.createServer(function(req, res){
    res.end("Hello Word! Hello to my website!")
}).listen(8081);
console.log("Ligou!")