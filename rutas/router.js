const express = require('express');
const router = express.Router(); 


router.get("/holamundo",(req,res,next)=>{
    res.status(200).send("hola mundo");
});



module.exports = router;