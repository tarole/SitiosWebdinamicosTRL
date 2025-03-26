const AppDataSource = require("../config/database");
const Producto = require('../entity/Producto');

const productoRepository = AppDataSource.getRepository(Producto);
module.exports = productoRepository;

