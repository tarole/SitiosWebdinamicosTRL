const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Nueva ruta para la carpeta de imágenes
const uploadDir = path.join(__dirname, '../../public/img');
// Si la carpeta no existe, la crea automáticamente
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
}

// Configuración de almacenamiento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir ); // Carpeta donde se guardarán las imágenes
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)); // Nombre único para cada imagen
    }
});

// Filtro para aceptar solo imágenes
const fileFilter = (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png|gif/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (extName && mimeType) {
        return cb(null, true);
    } else {
        return cb(new Error('Solo se permiten imágenes (JPEG, JPG, PNG, GIF)'));
    }
};

// Middleware Multer
const upload = multer({
    storage,
    fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Máximo 5MB por imagen
});

module.exports = upload;
