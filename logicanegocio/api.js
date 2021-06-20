const { Router } = require('express');
const router = Router();

var mysql = require('mysql');
var dbconn = mysql.createPool({
    host: '35.193.101.225',
    user: 'root',
    password: 'Ovjgg90wIG4lC6y5',
    database: 'usuarios'

});


router.get('/', (req, res) => {
    console.log('Database connection successful');
    dbconn.query("SELECT * FROM users", function(err, result, fields) {
        if (err) throw err;
        res.json(result);


    });

});


////////////////////////////////////////
router.post('/', (req, res) => {

    console.log('Database connection successful');
    dbconn.query("INSERT INTO users  VALUES ('" + req.body.user_id + "','" + req.body.user_name + "','" + req.body.user_apellido + "','" + req.body.user_direccion + "');", function(err, result, fields) {
        if (err) throw err;
        res.json({
            "se": "inserto "
        });

    });







});






module.exports = router;