const productoRepository = require('../repository/ProductoRepository');
const path = require('path');
const fs = require('fs');
const Producto = require("../entity/Producto");

// ✅ Index de Principal de Productos
const index = async (req, res) => {
    try {
        const productos = await productoRepository.find();
        res.render('index', { productos });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener productos', error });
    }
};

// ✅ Crear Producto
const formCrear = async (req, res) => {  
    try {
        res.render('crearProducto');
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el producto', error });
    }
};

// ✅ Crear Producto
const crear = async (req, res) => {
    try {
        const { nombre, precio, detalle } = req.body;
        const imagen1 = req.files?.imagen ? req.files.imagen[0].filename : "default.png";
        const imagen2 = req.files?.imagen2 ? req.files.imagen2[0].filename : "default.png";

        const nuevoProducto = productoRepository.create({ nombre, precio, imagen: imagen1, imagen2 , detalle });
        await productoRepository.save(nuevoProducto);

        res.redirect('/productos');
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al crear el producto', error });
    }
};

// ✅ Listar Productos
const listar = async (req, res) => {
    try {
        const productos = await productoRepository.find();
        res.render('productos', { productos });
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener productos', error });
    }
};

// ✅ Obtener un Producto por ID
const obtenerPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await productoRepository.findOne({ where: { id } });

        if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });

        res.render("editarProducto", { producto});
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al obtener producto', error });
    }
};

// ✅ Actualizar Producto
const actualizar = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, precio, detalle } = req.body;
        const imagen1 = req.files?.imagen ? req.files.imagen[0].filename : "default.png";
        const imagen2 = req.files?.imagen2 ? req.files.imagen2[0].filename : "default.png";

        const producto = await productoRepository.findOne({ where: { id } });
        if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });

        // Eliminar imagen anterior si se sube una nueva
        if (imagen1 && producto.imagen!="default.png") {
            fs.unlinkSync(path.join(__dirname, '../../public/img', producto.imagen));
        }
         // Eliminar imagen 2 anterior si se sube una nueva
         if (imagen2 && producto.imagen2!="default.png") {
            fs.unlinkSync(path.join(__dirname, '../../public/img', producto.imagen2));
        }

        productoRepository.merge(producto, { nombre, precio, imagen: imagen1, imagen2, detalle });
        await productoRepository.save(producto);

        res.redirect('/productos');
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al actualizar producto', error });
    }
};

// ✅ Eliminar Producto
const eliminar = async (req, res) => {
    try {
        const { id } = req.params;
        const producto = await productoRepository.findOne({ where: { id } });

        if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado' });

        // Eliminar imagen del servidor
        if (producto.imagen!="default.png") {
            fs.unlinkSync(path.join(__dirname, '../../public/img', producto.imagen));
        }
        // Eliminar imagen 2 del servidor
        if (producto.imagen2!="default.png") {
            fs.unlinkSync(path.join(__dirname, '../../public/img', producto.imagen2));
        }

        await productoRepository.remove(producto);
        res.redirect('/productos');
    } catch (error) {
        res.status(500).json({ mensaje: 'Error al eliminar producto', error });
    }
};

module.exports = { index, formCrear, crear, listar, obtenerPorId, actualizar, eliminar };
