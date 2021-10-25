var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController");


router.get('/', usersController.index);
router.get('/create', usersController.create);
router.post("/guardar", usersController.guardar);
router.post('/eliminar/:id', usersController.eliminar);
router.get('/editar/:id', usersController.editar);
router.post("/actualizar", usersController.actualizar);

module.exports = router;
