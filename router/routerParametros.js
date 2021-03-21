let express = require('express');
let router = express.Router();
let p

   router.get('/:p', (req, res)=>{
       p = req.params.p;
       if (p /1){
           res.send(`Parametro é um número`);
       }else{
           res.send('Não é um número')
       }
     });

     router.get('/', (req, res)=>{
            res.send(`Sem parametros.`);
      });


module.exports = router;