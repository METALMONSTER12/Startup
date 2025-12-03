const websocket = require('ws');

function peerProxy(server) {
  const wss = new websocketserver({ server: httpServer });
    wss.on('connection', (ws) => {
        ws.isAlive = true;

        ws.on('message', function message(data) {
            wss.clients.forEach((client) => {
                if (client !== ws && client.readyState === websocket.OPEN) {
                    client.send(data);
                }
            });
        });

    }