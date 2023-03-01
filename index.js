//generar variable para el modulo de express

const express = require("express");

//generar variable para la aplicacion
const app = express();
const port = 2500;
const hostname = '127.0.0.1'
//subir el servidor
//home de inicio
app.get('/', function (req, res) {
    res.send(`Estamos en la ruta de inicio (/)${req.method} `)
})

//subir el servidor
//cambio para subir a git

app.listen(port, () => {
    console.log(`Servidor esta corriendo en http://${hostname}:${port}`)
})

