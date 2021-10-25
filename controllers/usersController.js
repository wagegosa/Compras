let conexion = require('../config/conexion');
let user = require('../model/user');

module.exports = {
    index: function (req, res) {

        user.obtener(conexion, function (e, datos) {
            res.render('../views/users/index', { title: 'Usuarios', usuarios: datos });
        });
    },
    create: function (req, res) {
        res.render('users/create', { title: 'Usuarios ' });
    },
    guardar : function (req, res) {
        user.guardar(conexion, req.body, function (e) {});
        res.redirect('/users');
    },
    eliminar: function (req, res){
        user.borrar(conexion, req.params.id, function (e) {
            res.redirect('/users');
        });
    },
    editar: function (req,res) {
        user.retornaDatosId(conexion, req.params.id, function (e, registro){
            res.render('users/editar',{ user:registro[0], title: 'Usuarios'});
        })
    },
    actualizar: function (req, res){
        if(req.body.name || req.body.email || req.body.password || req.body.role || req.body.created_at){
            user.actualizar(conexion, req.body, function (e) {  })
        }
        res.redirect('/users')
    }
}