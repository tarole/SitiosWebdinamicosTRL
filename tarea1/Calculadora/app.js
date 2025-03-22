const express = require('express');
const path = require('path');
const app = express();

// Middleware para manejar datos JSON y formularios
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para procesar las operaciones matemáticas
app.post('/calcular', (req, res) => {
  const { a, b, operacion } = req.body;

  // Convertir los valores de entrada a números
  const numA = parseFloat(a);
  const numB = parseFloat(b);

  // Validación de números
  if (isNaN(numA) || isNaN(numB)) {
    return res.json({ error: 'Por favor, ingrese números válidos' });
  }

  let resultado;
  switch (operacion) {
    case 'sumar':
      resultado = numA + numB;
      break;
    case 'restar':
      resultado = numA - numB;
      break;
    case 'multiplicar':
      resultado = numA * numB;
      break;
    case 'dividir':
      if (numB === 0) {
        return res.json({ error: 'División por cero no permitida' });
      }
      resultado = numA / numB;
      break;
    default:
      return res.json({ error: 'Operación no válida' });
  }

  res.json({ resultado });
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
