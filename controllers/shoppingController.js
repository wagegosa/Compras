let conexion = require('../config/conexion');
let shopping = require('../model/shoping');
module.exports = {
    index: function (req, res){
        shopping.obtener(conexion, function (e, datos) {
            res.render('../views/shopping/index', { title: 'Compras ', productos: datos });
        });
    },
    comprar: function (req, res){

        var map = new Map(Object.entries(req.body));
        console.log(map);
        for (var [key, value] of Object.entries(req.body)) {
            console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
        }

        // console.log(req.body);
        // let user= 'wagegosa@gmail.com';
        // console.log(user);
    }
}