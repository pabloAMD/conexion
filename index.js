const express = require("express");
const app = express();
const morgan = require('morgan');

//setings
app.set('port', process.env.PORT || 3000);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//ROUTE
app.use(require('./logicanegocio/api.js'));


//starting the server
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});