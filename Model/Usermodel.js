const mongoose = require("mongoose")

const employeeSchema = new mongoose.Schema({
    employeename:{
        type:String,
        required:true,
    },
    employeeid:{
        type:String,
        required:true,
    },
    employeeage:{
        type:String,
        required:true,
    },
    department:{
        type:String,
        required:true,
    },
    salary:{
        type:String,
        required:true,
    }


})

module.exports = mongoose.model("employee",employeeSchema)