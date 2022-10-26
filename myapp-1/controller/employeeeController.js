import db from '../connection/mysql';
const getEmployees = async(req, res)=>{
    await db.query("SELECT * FROM employee",(err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send(result);
        }
    });
};
const getEmployee = async(req, res)=>{
    const id = req.query.id;
    await db.query("SELECT * FROM employee WHERE id = ?", [id], (err, result) =>{
        if(err){
            console.log(err);
            res.send(err.message);
        }else{
            res.send(result);
        }
    });
};
const postEmployee = async(req, res)=>{
    const {name, age, wage} = req.body;
    await db.query(
        "INSERT INTO employee(name, age, wage) VALUES(?, ?, ?) ",
        [name, age, wage],
        (err, result) => {
            if(err){
                console.log(err);
            }else{
                res.send("Values inserted", result);
            }
        }
    );
};
const putEmployee = async(req, res)=>{
    const {name, age, wage} = req.body;
    const id = req.query.id;
    await db.query("UPDATE employee SET name = ?, age = ?, wage = ?  WHERE id = ? ", [name, age, wage, id], (err, result) => {
        if(err){
            console.log(err);
        }else{
            res.send('Updated succes');
        }
    });
};
const deleteEmployee = async(req, res)=>{
    const id = req.query.id;
    await db.query("DELETE FROM employee WHERE id = ?", [id], (err, result) =>{
        if(err){
            console.log(err);
        }else{
            res.send("Delete Success");
            // res.send("Delete Success");
        }
    });
};
export {
    getEmployees, getEmployee, postEmployee, putEmployee, deleteEmployee
}