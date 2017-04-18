var http = require('http');

var PORT1 = 7000;
var PORT2 = 7500;

function serverResponse1(request, response){
    //do something here
    //this is what is sent back to the client
    response.end('It works you are the best!!! Path hit:' + request.url)
}

function serverResponse2(request, response){
    //do something here
    //this is what is sent back to the client
    response.end("You'll never be good enough!!! Path hit:" + request.url)
}

var server1 = http.createServer(serverResponse1);
var server2 = http.createServer(serverResponse2);



server1.listen(PORT1, function (){
    //do something when we start the server
    console.log('Server 1 has been started, listening on http://localhost:' + PORT1);
});

server2.listen(PORT2, function (){
    //do something when we start the server
    console.log('Server 2 has been started, listening on http://localhost:' + PORT2);
});