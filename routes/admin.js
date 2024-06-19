const path = require('path');

const express = require('express');

const productsControlle = require('../controllers/products')

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product', productsControlle.getAddProduct);

// /admin/add-product => POST
router.post('/add-product', productsControlle.postAddProduct);

module.exports = router;