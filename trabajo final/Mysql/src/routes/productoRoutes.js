const express = require('express');
const upload = require('../config/multer');
const productoController = require('../controllers/productoController');

const router = express.Router();

router.get('/', productoController.index);
router.get('/productos', productoController.listar);
router.get('/producto/editar/:id', productoController.obtenerPorId);
router.get('/producto/crear', productoController.formCrear);
router.post('/producto/crear', upload.fields([{ name: "imagen" }, { name: "imagen2" }]), productoController.crear);
router.post('/productos/editar/:id', upload.fields([{ name: "imagen" }, { name: "imagen2" }]), productoController.actualizar);
router.delete('/producto/:id', productoController.eliminar);

module.exports = router;
