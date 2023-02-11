const mongoose = require('mongoose')
const plm = require('passport-local-mongoose')
const usermodel = new mongoose.Schema({
    name:String,
    contact:String,
    email:String,
    address:String,
    pincode:String,
    state:String,
    City:String
})
usermodel.plugin(plm);
const User = new mongoose.model('user',usermodel)
module.exports =User;