var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: "Paul's Website - Home" });
});

module.exports = router;
