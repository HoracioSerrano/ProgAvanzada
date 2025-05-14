const express = require('express')
const app = express()
const port = 3000


//parseo request body
app.use(express.json());
//utiliza CORS
var cors = require('cors');
app.use(cors());


//seteo router
const router = require('./rutas/router');
app.use('/', router);



app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`)
});
