const { Router } = require('express');
const router = Router();

var mysql = require('mysql');
var dbconn = mysql.createConnection({
    host: '35.193.101.225',
    user: 'root',
    password: 'Ovjgg90wIG4lC6y5',
    database: 'usuarios'

});


function crearConexion() {
    dbconn.connect(function(err) {
        if (err) {
            console.log('Database connection error');
        } else {
            console.log('Database connection successful');

        }
    });
}





router.get('/', (req, res) => {

    crearConexion();
    dbconn.query("SELECT * FROM users", function(err, result, fields) {
        if (err) throw err;
        res.json(result);
        dbconn.end(function(err) {
            console.log("se cerro la  conexion")
        });
    });




});


////////////////////////////////////////
router.post('/', (req, res) => {
    crearConexion();
    const cedula = req.body.user_id;
    console.log(cedula)

    dbconn.query("INSERT INTO users  VALUES ('" + req.body.user_id + "','" + req.body.user_name + "','" + req.body.user_apellido + "','" + req.body.user_direccion + "');", function(err, result, fields) {
        if (err) throw err;
        res.json({
            "se": "inserto "
        });
        dbconn.end(function(err) {
            console.log("se cerro la  conexion")
        });
    });

});






module.exports = router;