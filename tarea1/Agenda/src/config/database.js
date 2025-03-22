const { DataSource } = require("typeorm");
const Agenda = require("../entity/Agenda");

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    username: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "bd_agenda",
    entities: [Agenda],
    synchronize: true,
    logging: false,
});

// Prueba de conexión a la base de datos
//AppDataSource.initialize()
    //.then(() => console.log("📌 database.js - Base de datos conectada"))
    //.catch(error => console.error("❌ database.js - Error de conexión:", error));

module.exports = AppDataSource;
