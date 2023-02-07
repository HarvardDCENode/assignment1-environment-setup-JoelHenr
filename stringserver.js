var http = require('http');
var server = http.createServer(function (req, res) {
    res.writeHead(200);
    res.write("Hello Everyone, thank you so much for teaching us this!\n This is so cool!");
    res.end();
});
server.listen(8080);
console.log("Listening on http://127.0.0.1:8080/");
