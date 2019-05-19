var mysql = require('mysql');
var connection;
if (process.env.JAWSDB_URL) {
// change to deploy in heroku
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {

	connection = mysql.createConnection({
		port: 8889,
		host: 'localhost',
		user: 'root',
		password: 'root',
		database: 'burgers_db'
	})
};
// connect to mysql
connection.connect(function(err) {
  if (err) {
    console.error('ERROR: MySQL connection error -- ' + err.stack + '\n\n');
    return;
  }
  console.log('Connected to MySQL database as id ' + connection.threadId + '\n\n');
});
module.exports = connection;