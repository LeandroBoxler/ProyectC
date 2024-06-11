var express = require('express');
const home = require('../controllers/home');
const products = require('../controllers/products');
var router = express.Router();


/* GET home page. */
router.get('/', home.home);
router.get('/products', products.product);

module.exports = router;
