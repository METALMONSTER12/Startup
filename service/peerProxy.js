const websocket = require('ws');

function peerProxy(server) {
  const wss = new websocket.Server({ server: server });
    
  wss.on('connection', (ws) => {
        ws.isAlive = true;

        ws.on('message', function message(data) {
            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === websocket.OPEN) {
                    client.send(data);
                }
            });
        });

        ws.on('pong', () => {
            ws.isAlive = true;
        });
    });

    setInterval(() => {
        wss.clients.forEach((function each(client) {
            if (client.isAlive === false) return client.terminate();

            client.isAlive = false;
            client.ping();  
        }));
    }, 30000);
}

module.exports = peerProxy;