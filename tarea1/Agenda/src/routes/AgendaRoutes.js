const express = require("express");
const AgendaController = require("../controller/AgendaController");

const router = express.Router();

// Rutas para listar y mostrar formulario de creación
router.get("/", AgendaController.list);
router.get("/create", AgendaController.createForm);
router.post("/create", AgendaController.create);

// Rutas para editar y actualizar un contacto
router.get("/edit/:id", AgendaController.editForm);
router.post("/edit/:id", AgendaController.update);

// Ruta para eliminar un contacto
router.get("/delete/:id", AgendaController.delete);

module.exports = router;
