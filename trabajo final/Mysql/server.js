const app = require('./src/app');
const AppDataSource = require("./src/config/database");
const dotenv = require('dotenv');

dotenv.config();

// Esperar a que la BD se conecte antes de inicializar servidor
AppDataSource.initialize()
  .then(() => {
      console.log("📌 server.js - Base de datos conectada");
      // Iniciar servidor
      const PORT = process.env.PORT || 3001;
      app.listen(PORT, () => {
          console.log(`🚀 server.js - Servidor corriendo en http://localhost:${PORT}`);
      });
  })
  .catch(error => console.error("❌ server.js - Error de conexión:", error));