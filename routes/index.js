var express = require('express');
var router = express.Router();
// declaramos una constante para guardar la ruta donde vamos a igresar
const productsController = require("../controllers/productsController");

/* GET home page. */
// router.get('/', function(req,res, next){
//     res.send("Bienvenidos")
// });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bienvenidos', title2: 'A la tienda' });
});

module.exports = router;
