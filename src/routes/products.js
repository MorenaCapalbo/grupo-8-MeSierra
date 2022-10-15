const express = require("express");
const router = express.Router();
const path = require("path");
const multer = require("multer");
const multerStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images/products");
  },
  filename: function (req, file, cb) {
    cb(null, "img-" + Date.now() + path.extname(file.originalname));
  },
});

var upload = multer({ storage: multerStorage });

const productsController = require("../controllers/productsController");

// Se listan todos los productos de la base de datos JSON

router.get("/", productsController.index);

// Detalle del producto

router.get("/detail/:id", productsController.detail);

// Mostrar formulario de creacion de un producto

router.get("/create", productsController.create);
router.post("/", upload.single("imagen"), productsController.create);

// BOTON Modificar un producto

router.get("/edit/:id", productsController.edit);

//Recibir los datos de un formulario de edicion

router.put("/:id", productsController.update);

// BOTON BORRAR eliminar productos

router.delete("/:id", productsController.destroy);

module.exports = router;
