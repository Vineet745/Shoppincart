var express = require('express');
var router = express.Router();
const Product = require('../model/product')
const upload = require('./multer')
const User = require('../model/user')
const passport = require('passport')
const Localstr = require('passport-local')

passport.use(new Localstr(User.authenticate()));


/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find()
  .then((allcard)=>{
    res.render('index',{allcard})
  })
  .catch((err)=> res.send(err))
});

router.get('/Addproduct', function(req, res, next) {
  res.render('Addproduct', { title: 'Express' });
});

router.post('/Addproduct', upload.single('Image'), function(req, res, next) {
  Product.create({
    Image:req.file.filename,
    mainprice:req.body.mainprice,
    offerprice:req.body.offerprice,
    percent:req.body.percent,
    productname:req.body.productname,
    highlight:req.body.highlight,
    bankoffers:req.body.bankoffers
  })
  .then(()=> res.redirect('/'))
  .catch((err)=> res.send(err.message))
  
});

router.get('/overview/:id', function(req, res, next) {
  Product.findById(req.params.id)
  .then((card)=>{
    res.render('overview',{card})
  })
  .catch((err)=> res.send(err))
});

router.get('/cart', function(req, res, next) {
  Product.find()
  .then((carditem)=>{
    res.render('addcart',{carditem})
  })
  .catch((err)=> res.send(err))
});

// router.get('/delete/:id', function(req, res, next) {
//   Product.findByIdAndDelete(req.params.id)
//   .then(()=> res.render('addcart'))
//   .catch((err)=> res.send(err))
// });


// PassportUser

router.get('/userdetail', function(req, res, next) {
  res.render('userdetail', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});


module.exports = router;
