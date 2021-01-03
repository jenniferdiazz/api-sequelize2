const express = require ('express')
const bodyParser= require('body-parser')
const morgan = require('morgan')

//importing routes
const projectRoutes = require ('./routes/projects');
const taskRoutes = require ('./routes/tasks');

//initialization
const app = express();

//middlewares
//ve por consola las peticiones q van llegando
app.use(morgan('dev'));

//servidor entiende formato json
app.use(bodyParser.json());

//router
app.use('/api/projects', projectRoutes);
//app.use('/api/tasks', taskRoutes);

module.exports = app