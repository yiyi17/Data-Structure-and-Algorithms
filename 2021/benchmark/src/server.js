const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type' : 'text/event-stream',
        'Access-Control-Allow-Origin':'*'
    })
    let i = 0;
    const timer = setInterval(()=>{
        const date = {date:new Date()}
        var content = 'event: ping\n'+"data:"+JSON.stringify(date)+"" + "\n\n";
        res.write(content);
    },1000)

    res.connection.on("close", function(){
        res.end();
        clearInterval(timer);
        console.log("Client closed connection. Aborting.");
        });

}).listen(3000)
console.log('server is run http://localhost:3000');
