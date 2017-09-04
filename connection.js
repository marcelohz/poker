function listen () {
    const WebSocket = require('ws');
    const wss = new WebSocket.Server({ port: 1111 });

    wss.on('connection', function connection(ws) {
        console.log('connection?');
        ws.on('message', function incoming(message) {
            console.log('received: %s', message);
        });
        ws.send('something');
        return wss;
    });
}
module.exports = {
    listen: listen
}