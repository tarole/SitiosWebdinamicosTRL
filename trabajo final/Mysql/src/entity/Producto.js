const { EntitySchema } = require("typeorm");

module.exports = new EntitySchema({
  name: "Producto",
  tableName: "producto",
  columns: {
    id: {
      primary: true,
      type: "tinyint",
      precision: 3,
      generated: true,
    },
    nombre: {
      type: "varchar",
      length: 50
    },
    precio: {
      type: "decimal",
      precision: 9,
      scale: 2
    },
    imagen: {
      type: "varchar",
      length: 30,
      default: "default.png",
      nullable: true
    },
    imagen2: {
      type: "varchar",
      length: 30,
      default: "default.png",
      nullable: true
    },
    detalle: {
      type: "varchar",
      length: 255
    },
  },
});
