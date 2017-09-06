var game = require('./game');

var w;

function listen () {
    const WebSocket = require('ws');
    const wss = new WebSocket.Server({ port: 1111 });
    w = wss;
    wss.on('connection', function connection(ws) {
        console.log('connection?');
        ws.on('message', function incoming(data) {
            console.log(data);
            parse(data);
        });
        wss.send('something');
        return wss;
    });
}

function parse(msg) {

    if(msg === 'BEGIN') {
        game.dealCards();
        w.send('HANDP1: ' + game.p1Cards)
        w.send('HANDPC: ' + game.pcCards)
    }

}

function send(str) {

}

game.dealCards();

module.exports = {
    listen: listen
}