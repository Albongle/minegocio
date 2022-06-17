const GestorDbMongo = require("./gestorDbMongo");

const esquema = {
  nombre: { type: String, require: true, max: 50 },
  precio: { type: Number, require: true },
  imagen: { type: String, require: true, max: 255 },
};

module.exports = class ProductosDAOMongo extends GestorDbMongo {
  constructor() {
    super(process.env.STRING_CONNECTION, "productos", esquema);
  }
};
