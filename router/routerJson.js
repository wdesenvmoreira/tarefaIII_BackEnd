let express = require('express');
let router = express.Router();


   router.get('/', (req, res)=>{
       res.status(200).json({id: 1 , usuario :"Usuario"});
   });


module.exports = router;