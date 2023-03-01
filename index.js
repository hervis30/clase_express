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

app.get('/login/:username/:password', (req, res) => {
    let username = req.params.username;
    let password = req.params.password
    // if (username == "pgonzalez" && password == "789") {
    //     res.send(`Bienvenido usaurio <b>${username}</b>`);
    // } else {
    //     res.send(`Usuario y/o contraseña invalidos`);
    // }

    res.send(username == 'pgonzalez' && password == '789' ? `Bienvenido usuario <b>${username}</b>` :
        `Usuario o contrasena invalidos`);

    // res.send(`El usuario es ${username} y la contrasena es: ${req.params.password}`);
})

//generar endpoint para el metodo get que reciba un paramentro de salario
// y muestre el valor del subsidio si el salario es menor o igual a 1 millon

//subir el servidor
//cambio para subir a git
//endpoint us
app.get('/us', (req, res) => {
    res.send(`Estamos en la ruta de ${req.path} en el metodo ${req.method}`)
})

app.listen(port, () => {
    console.log(`Servidor esta corriendo en http://${hostname}:${port}`)
})



