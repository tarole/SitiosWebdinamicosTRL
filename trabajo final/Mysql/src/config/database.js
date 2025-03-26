const { DataSource } = require("typeorm");
const Producto = require("../entity/Producto");

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "bd_tienda",
    entities: [Producto],
    synchronize: true, // Solo en desarrollo (crea/modifica tablas automáticamente)
    logging: false,
});

module.exports = AppDataSource;
