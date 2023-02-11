const mongoose = require('mongoose')
const productmodel = new mongoose.Schema({
    author:[{type:mongoose.Schema.Types.ObjectId,ref:"user"}],
    Image:String,
    productname:String,
    mainprice:String,
    offerprice:String,
    bankoffers:[],
    percent:String,
    highlight:[],
})

const Product = new mongoose.model('product',productmodel)
module.exports = Product;

