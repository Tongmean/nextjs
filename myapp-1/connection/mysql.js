const mysql = require('mysql');
const db = mysql.createConnection({
    user:"root",
    host: "localhost",
    database: "crud",
});
db.connect((err)=> {
    if (err) throw err.message;
    console.log("Connected! mysql");
});

export default db;