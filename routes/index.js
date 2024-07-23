var express = require('express');
var router = express.Router();
const books = [];
const book= require("../models/bookmodel")
// book.push(req.body);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.post('/register', function(req, res, next) {
  book.create(req.body)
 .then(() => res.redirect('/show'))
 .catch(() => res.send(err));
 const data = req.body;
  books.push(data);
});
router.get('/show', function(req, res, next) {
  res.render("show", {Books: books}) 
});
// router.get('/details', function(req, res, next) {
//   res.render('details', { title: 'Express' });
// });
router.get('/details/:index', function(req, res, next) {
  
  // res.json(books[req.params.index]);
  const dets = books[req.params.index];
  res.render("details", { book :dets,index:req.params.index});
});
router.get('/delete/:index', function(req, res, next) {
books.splice(req.params.index,1);
  res.redirect("/show"); 
});
router.get('/update/:index', function(req, res, next) {
  
  // res.json(books[req.params.index]);
  const dets = books[req.params.index];
  res.render("update", { book :dets,index:req.params.index});
});
router.post('/update/:index', function(req, res, next) {
  books[req.params.index]=req.body;
    res.redirect(`/details/${req.params.index}`); 
  });



module.exports = router;

