const express = require('express');
const router = express.Router();
const { postRegister } = require("../controllers/index");
//using destructuring

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: "Paul's Website - Home"});
});

/* GET /register */
router.get('/register', (req, res, next) => {
  res.send('GET /register');
});

/* POST /register */
router.post('/register', postRegister);


/* GET /login */
router.get('/login', (req, res, next) => {
  res.send('GET /login');
});

/* POST /login */
router.post('/login', (req, res, next) => {
  res.send('POST /login');
});

/* GET /profile */
router.get('/profile', (req, res, next) => {
  res.send('GET /profile');
});

/* PUT /profile/:user_id */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('PUT /profile/:user_id');
});


/* GET /forgot-pw */
router.get('/forgot-pw', (req, res, next) => {
  res.send('GET /forgot-pw');
});

/* PUT /forgot-pw */
router.put('/forgot-pw', (req, res, next) => {
  res.send('PUT /forgot-pw');
});

/* GET /reset-pq/:token */
router.get('/reset/:token', (req, res, next) => {
  res.send('GET /reset/:token');
});

/* PUT /reset-pw/:token */
router.put('/reset/:token', (req, res, next) => {
  res.send('PUT /reset/:token');
});

module.exports = router;
