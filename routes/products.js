var express = require('express');
var router = express.Router();
// declaramos una constante para guardar la ruta donde vamos a igresar
const productsController = require("../controllers/productsController");

/* GET Product page. */
router.get('/', productsController.index);
router.get('/create', productsController.create);
router.post("/guardar", productsController.guardar);
router.post('/eliminar/:id', productsController.eliminar);
router.get('/editar/:id', productsController.editar);
router.post("/actualizar", productsController.actualizar);
module.exports = router;