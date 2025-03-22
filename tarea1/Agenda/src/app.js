require("dotenv").config();
const express = require("express");
const path = require("path");
const AppDataSource = require("./config/database"); // Archivo de conexión a BD
const agendaRoutes = require("./routes/AgendaRoutes");

const app = express();
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view", "views"));

// Esperar a que la BD se conecte antes de inicializar rutas
AppDataSource.initialize()
  .then(() => {
      console.log("📌 app.js - Base de datos conectada");
      app.use("/", agendaRoutes); // 🔹 Se montan las rutas SOLO después de la conexión

      // Iniciar servidor
      const PORT = process.env.PORT || 3000;
      app.listen(PORT, () => {
          console.log(`🚀 app.js - Servidor corriendo en http://localhost:${PORT}`);
      });
  })
  .catch(error => console.error("❌ app.js - Error de conexión:", error));

