const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
const cors = require('cors');
//crear conexion a la bd con sequelize
const db = require('./config/db');

//Importar el modelo
require('./models/City');
require('./models/Profesor');
require('./models/Group');
require('./models/Student');
db.sync()
    .then(() => console.log('Conectado al servidor de BD'))
    .catch((error) => console.log(error));

const app = express();
const port = 5001;
app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());

app.use(routes);

app.listen(port);