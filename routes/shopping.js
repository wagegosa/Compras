var express = require('express');
var router = express.Router();

const shoppingController = require('../controllers/shoppingController.js');

// rutas deseadas
router.get('/', shoppingController.index);
router.post("/comprar", shoppingController.comprar);
module.exports = router;