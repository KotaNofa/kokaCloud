const mcs = require('node-mcstatus');

const host = 'boubas.net'; // Your server host
const port = 25565;         // Minecraft default port for Java
const options = { query: true };

mcs.statusJava(host, port, options)
    .then((result) => {
        console.log('Minecraft Server Status:', result);
        if (result.online) {
            // If the server is online, log detailed information about the server
            console.log(`Server is Online!`);
            console.log(`Players Online: ${result.players.online}`);
            console.log(`Max Players: ${result.players.max}`);
            console.log(`Minecraft Version: ${result.version.name}`);
        } else {
            // If the server is offline
            console.log('Server is offline');
        }
    })
    .catch((error) => {
        console.error('Error fetching server status:', error);
    });
