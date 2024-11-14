const express = require("express");
const app = express();
require('dotenv').config();
const autoR = require('./routes/autoRoutes')
const clienteR = require('./routes/clienteRoutes')
const alquileresR = require('./routes/alquilerRoutes')
const PORT = process.env.PORT
app.use(express.json())

app.use('/api', autoR);
app.use('/api', clienteR);
app.use('/api', alquileresR);

app.listen(PORT, () => {
    console.log("Servidor corriendo");
})