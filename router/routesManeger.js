let express = require('express');
let router = express.Router();
const routerHome = require('./routerHome');
const routUsuarios = require('./routerUsuario');
const routerParametros = require('./routerParametros');
const routerJson = require('./routerJson');


const routeres = (app)=>{
    app.use('/', routerHome);
    app.use('/usuarios', routUsuarios);
    app.use('/parametros',routerParametros);
    app.use('/json', routerJson);
    app.get('*', (req, res)=>{
        res.status(404).send('Pagina não encontrada');
    })
}

module.exports = routeres;