const http = require('http');
const fs = require('fs');

const port = 8080;


var server = http.createServer(
    (_ ,response) => {
        fs.readFile('./app/html/index.html', 'utf8', (error, data) => {
            if (error != null) {
                console.log("faield to read file: ", error);
                response.writeHead(500, {'Content-Type':'text/html'});
                response.write("500 internal error");
                response.end();
                return;
            }
            response.writeHead(200, {'Content-Type':'text/html'});
            response.write(data);
            response.end();
            return;
        })
       
    }
);


console.log("listening: http://127.0.0.1:%d", port);
server.listen(port);