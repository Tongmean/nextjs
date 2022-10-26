const mongoose = require('mongoose');

const db = async ()=>{
    try {
        await mongoose.connect('mongodb+srv://tong:15tongmean@cluster0.9qeqyhn.mongodb.net/nestjs?retryWrites=true&w=majority')
        console.log("db connected");
    } catch (error) {
        console.log(error.message);
    }
};
export default db;
// db()