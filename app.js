const express = require('express') 
const app = express()
const port = 3000


//parseo request body
app.use(express.json());
//utiliza CORS
var cors = require('cors');
app.use(cors());

app.listen(port, () => {
    console.log(`Escuchando en puerto ${port}`)
});