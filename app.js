const express = require('express');
const app = express();

// Configuración
app.set('view engine', 'ejs');

app.use(express.static('public'));//guarda el css , imagenes

app.use(express.urlencoded({ extended: false }));// nos permite procesar los formurios

// Rutas
const groupsRouter = require('./routes/groups');

app.get('/', (req, res) => {res.redirect('/groups/')});

app.use('/groups', groupsRouter);

// Servidor
app.listen(3000, () => { console.log('Servidor funcionando en el puerto http://localhost:3000') })