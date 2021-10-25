let mysql = require('mysql');
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    dateStrings:true,
    database: 'brm'
});
con.connect(
    (e)=>{
        if (!e){
            console.log('Conexión establecida');
        }else{
            console.log('Eroror de conexcion' + e);
        }
    }
);
module.exports = con;