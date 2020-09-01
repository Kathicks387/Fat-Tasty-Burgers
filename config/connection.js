// Set up MySQL connection.
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "jw0ch9vofhcajqg7.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "hia0msiaes7br8f3",
    password: "pnoclvrsxs6r4tsm",
    database: "nva4b6pnr9g5y7pt",
  });
};



// Make connection.
connection.connect(function(err) {
  if (err) {
      console.error("error connecting: " + err.stack);
      return;
  }
  console.log("connected as id " + connection.threadId);
});


// Export connection for our ORM to use.
module.exports = connection;