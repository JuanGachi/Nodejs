var servidor = require('http');
var archivos = require('fs');
var ruta = require('url');
var procesador = require('querystring')
servidor.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
 
          switch(req.url){
        case "/":
            console.log("principal")
            archivos.readFile('front.html',function(err,data){
            res.end(data)
                
            });
            
            break;
            case "/recibe":
            console.log("recibe")
            break;
             case "/envia":
            console.log("envia")
            break;
            
            
    }
     
           
}).listen(8080);