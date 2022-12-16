const express= require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const multer = require("multer");
const { check } = require("express-validator");
const { body } = require('express-validator');
const { validationResult } = require("express-validator");

const multerStorage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "public/images/users");
    },
    filename: function (req, file, cb) {
      cb(null, "avatar-" + Date.now() + path.extname(file.originalname));
    },
  });


var upload = multer({ storage: multerStorage });

router.get("/", usersController.list);

router.get("/login", usersController.loginView);

router.get("/profile", usersController.profileView);

router.get("/register", usersController.registerView);

router.post("/login", usersController.login)

router.post("/register", upload.single("avatar"), [
    check('nombre_completo').isLength({min:1}).withMessage('Debe ingresar un nombre'),
    check('nombre_usuario').isLength({min:1}).withMessage('Debe ingresar un usuario'),
    check('email').isEmail().withMessage('Debe ser un email valido'),
    check('contrasena').isLength({min:3}).withMessage('Debe ingresar al menos 3 caracteres')
], usersController.register);

router.post("home", usersController.register);

module.exports = router;




