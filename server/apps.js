const mysql = require('mysql2');

// Create a connection to the MySQL database
const connection = mysql.createConnection({
  host: 'localhost',    // Host where MySQL server is running
  user: 'commentUser',         // MySQL username
  password: '8192', // MySQL password
  database: 'commentStream'  // Database you want to use
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err.stack);
    return;
  }
  console.log('Connected to MySQL as id ' + connection.threadId);
});

// Example query
connection.query('SELECT * FROM messages', (err, results, fields) => {
  if (err) {
    console.error('Error executing query:', err.stack);
    return;
  }
  console.log('Query results:', results);
});

// Close the connection
connection.end();
