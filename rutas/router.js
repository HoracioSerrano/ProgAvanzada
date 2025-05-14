const express = require('express');
const router = express.Router(); 


router.get("/holamundos",(req,res,next)=>{
    res.status(200).send("hola mundo");
});



module.exports = router;