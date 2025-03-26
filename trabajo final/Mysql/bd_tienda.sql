CREATE DATABASE IF NOT EXISTS bd_tienda;
USE bd_tienda;

CREATE TABLE IF NOT EXISTS producto (
  `id` tinyint(3) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nombre` varchar(50) NOT NULL,
  `precio` decimal(9,2) NOT NULL,
  `imagen` varchar(30) DEFAULT 'default.png',
  `imagen2` varchar(30) DEFAULT 'default.png',
  `detalle` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

INSERT INTO `producto` (`nombre`, `precio`, `imagen`, `imagen2`, `detalle`) VALUES
('Pozo de Agua', '1000.00', 'producto1b.webp', 'producto1a.jpg', 'Perforación en la tierra para acceder a fuentes subterráneas de agua.'),
('Sistemas Electricos', '2000.00', 'producto2a.jpg', 'producto2b.jpg',  'Instalación de sistemas electricos a interconección, generador, panel solar.'),
('Red Vial', '3000.00', 'producto3a.jpeg', 'producto3b.jpg',  'Construcción, mantenimiento y mejoramiento vial de ripio y asfalto.'),
('Turismo', '4000.00', 'producto4a.jpg', 'producto4b.jpg',  'Albergue ecoturístico en zona rural en contacto con la naturaleza amazonico.'),
('Laguna Piscicola', '5000.00', 'producto5a.avif', 'producto5b.avif',  'Construcción y mantenimiento de estanques de tierra que retienen el agua y los peces.');
