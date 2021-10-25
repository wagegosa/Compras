var bcrypt = require('bcryptjs');
module.exports = {

    obtener: function (conexion, funcion) {
        conexion.query("SELECT * FROM users", funcion);
    },
    guardar: function (conexion, datos, funcion) {
        conexion.query(`INSERT INTO users (name, email, password, role, created_at) VALUES('${datos.name}', '${datos.email}', '${datos.password}', ${datos.role}, '${datos.created_at}')`, function (err) { console.log(err) });

    },
    borrar: function (conexion, id, funcion) {
        conexion.query("DELETE FROM users WHERE id =" + id, funcion);
    },
    retornaDatosId: function (conexion, id, funcion) {
        conexion.query("SELECT * FROM users WHERE id =" + id, funcion);
    },
    actualizar: function (conexion, datos, funcion) {
        conexion.query("UPDATE users set name = '"+datos.name+"', password = '"+bcrypt.hashSync(datos.password)+"', role ="+ datos.role +", created_at = '"+ datos.created_at +"' WHERE id =  "+ datos.id, funcion);
    }


}