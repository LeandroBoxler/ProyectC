var express = require('express');
const home = require('../controllers/home');
const products = require('../controllers/products');
const cart = require('../controllers/cart');

var router = express.Router();


/* GET home page. */
router.get('/', home.home);
router.get('/products', products.product);
router.get('/cart', cart.cart);

module.exports = router;
