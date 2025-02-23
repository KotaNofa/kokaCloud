const express = require('express');
const mcs = require('node-mcstatus');

const app = express();
const fetchPort = 3000;

const host = 'boubas.net';
const port = 25565;
const options = { query: true };

app.get('/mcstats', (req, res) => {
    mcs.statusJava(host, port, options)
        .then((result) => {
            res.json(result);
            console.log("hi");
        })
        .catch((error) => {
            res.status(500).json({ error: 'Server is offline :(' });
        });
});

app.use(express.static("public"));

app.listen(fetchPort, () => {
    console.log(`Server is running on http://localhost:${fetchPort}`);
});