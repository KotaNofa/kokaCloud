const express = require('express');
const mcs = require('node-mcstatus');
const app = express();

const host = 'boubas.net';
const port = 25565;
const options = { query: true };

app.get('/', (req, res) => {
    mcs.statusJava(host, port, options)
        .then((result) => {
            if (result.online) {
                res.json({
                    result
                });
            } else {
                res.json({ online: false });
            }
        })
        .catch((error) => {
            console.error('Error fetching server status:', error);
            res.status(500).json({ error: 'Failed to fetch server status' });
        });
});

const webServerPort = 3000;
app.listen(webServerPort, () => {
    console.log(`Server is running on http://localhost:${3000}`);
});