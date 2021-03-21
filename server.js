let express = require('express');
let app = express();
let routerManeger = require('./router/routesManeger');
const port = 5000;

//app.use('/', routerManeger);
routerManeger(app);


app.listen(port,()=> console.log(`Servidor online na porta: ${port}`));