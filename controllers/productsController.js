let conexion = require('../config/conexion');
let product = require('../model/product');

module.exports = {
    index: function (req, res) {

        product.obtener(conexion, function (e, datos) {
            res.render('../views/products/index', { title: 'Productos ', productos: datos });
        });
    },
    create: function (req, res) {
        res.render('products/create', { title: 'Productos ' });
    },
    guardar : function (req, res) {
        product.guardar(conexion, req.body, function (e) {});
        res.redirect('/products');
    },
    eliminar: function (req, res){
        product.borrar(conexion, req.params.id, function (e) {
            res.redirect('/products');
        });
    },
    editar: function (req,res) {
        product.retornaDatosId(conexion, req.params.id, function (e, registro){
            res.render('products/editar',{ product:registro[0] , title: 'Productos '});
        })
    },
    actualizar: function (req, res){
        if(req.body.name || req.body.lot_number || req.body.Price || req.body.quantity_available || req.body.date_admission){
            product.actualizar(conexion, req.body, function (e) {  })
        }
        res.redirect('/products')
    }
}