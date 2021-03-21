let express = require('express');
let router = express.Router();


   router.get('/', (req, res)=>{
       res.send('Retornando Meto Get de Usuarios');
   });
   router.post('/', (req, res)=>{
       
res.send(`Retornando Metodo Post de Usuarios`);
});

module.exports = router;