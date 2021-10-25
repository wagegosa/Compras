module.exports = {
    obtener: function(conexion, funcion){
        conexion.query("SELECT * FROM products", funcion);
    },
    comprar: function (conexion, datos, funcion) {
        // console.log(datos);
        // conexion.query(`INSERT INTO users (name, email, password, role, created_at) VALUES('${datos.name}', '${datos.email}', '${datos.password}', ${datos.role}, '${datos.created_at}')`, function (err) { console.log(err) });

    },
}