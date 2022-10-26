const mysql = require('mysql');
// const db = mysql.createConnection({
//     user:"root",
//     host: "localhost",
//     database: "crud",
// });
// db.connect((err)=> {
//     if (err) throw err.message;
//     console.log("Connected!");
// });


// try {
//     const db = mysql.createConnection({
//         user:"root",
//         host: "localhost",
//         database: "crud",
//     });
//     console.log("db connected");
//     return db;
// } catch (error) {
//     console.log(error.message);
// }

// const db = mysql.createConnection({
//     user:"root",
//     host: "localhost",
//     database: "crud",
// });
try {
    const db = mysql.createConnection({
        user:"root",
        host: "localhost",
        database: "crud",
    });
} catch (error) {
    
}
// export default db;
db.query("SELECT * FROM employee",(err, result) =>{
    if(err){
        console.log(err);
    }else{
        console.log(result);
    }
});
