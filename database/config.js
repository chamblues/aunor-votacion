const mysql = require('mysql2');
// Create the connection pool. The pool-specific settings are the defaults
const config = mysql.createPool({
    host: '50.87.140.181',
    user: 'beatbran_developer',
    database: 'beatbran_autopistadelnorte',
    password: 'Developer#123.!',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});


module.exports = config;

