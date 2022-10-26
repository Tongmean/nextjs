import User from '../model/userModel';
import db from '../connection/db';
db();
const getUsers = async(req, res)=>{
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        console.log(error)
        return res.status(400).json({message: 'Sth went Wrong'});
    }
};
const addUser = async(req, res)=>{
    const {name, age, role } = req.body;
    const newuser = new User({name: name, age: age, role: role});
    try {
        await newuser.save();
        res.send(newuser,"Save data successfully");
    } catch (error) {
        return res.status(400).json({message: 'Sth went Wrong'});
    }
};
const getUser = async(req, res)=>{
    try {
        const getUser = await User.findById({_id: req.query.id});
        res.send(getUser);
    } catch (error) {
        return res.status(4000).json({ message: 'Sth went wrong'});
    }
};
const deleteUser = async(req, res)=>{
    const _id = req.query.id;
    try {
        await User.findByIdAndDelete({_id: _id});
        res.send("Delete Successfully");
    } catch (error) {
        return res.status(4000).json({ message: 'Sth went wrong'});
    }
};
const putUser = async(req, res)=>{
    const {name, age, role } = req.body;
    try {
        const user = await User.findById({_id: req.query.id});
        user.name = name,
        user.age = age,
        user.role = role
        await user.save();
        res.send(user, "Updated successfully");
    } catch (error) {
        return res.status(4000).json({ message: 'Sth went wrong'});
    }
};


export {
    getUsers, addUser, getUser, deleteUser, putUser
};


