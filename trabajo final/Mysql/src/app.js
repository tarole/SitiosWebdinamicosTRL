const express = require('express');
const path = require('path');
const multer = require('multer');
const productoRoutes = require('./routes/productoRoutes');
const methodOverride = require('method-override');

const app = express();

// Configurar motor de vistas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware para servir archivos estáticos desde public/
app.use(express.static(path.join(__dirname, '../public')));
// Middleware para soportar DELETE en formularios
app.use(methodOverride('_method'));
// Middleware para procesar formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Rutas 
app.use('/', productoRoutes);

module.exports = app;
