module.exports = {
    obtener: function(conexion, funcion){
        conexion.query("SELECT * FROM products", funcion);
    },
    guardar: function(conexion, datos, funcion){
        conexion.query(`INSERT INTO products (lot_number, name, Price, quantity_available, date_admission) VALUES('${datos.lot_number}', '${datos.name}', ${datos.Price}, ${datos.quantity_available}, '${datos.date_admission}')`, function(err){console.log(err)});
        
    },
    borrar: function(conexion,id, funcion){
        conexion.query("DELETE FROM products WHERE id ="+id, funcion);
    },
    retornaDatosId: function (conexion, id, funcion) {
        conexion.query("SELECT * FROM products WHERE id ="+ id, funcion);
    },
    actualizar:function(conexion, datos, funcion){
        conexion.query("UPDATE products set lot_number = '"+datos.lot_number+"', name = '"+datos.name+"', Price ="+ datos.Price +", quantity_available = "+ datos.quantity_available +", date_admission = '"+ datos.date_admission+"' WHERE id =  "+ datos.id, funcion);
    }


}