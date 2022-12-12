const express= require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");


router.get("/", usersController.list);
router.get("/login", usersController.loginView);
router.post("/login", usersController.login)
router.get("/register", usersController.registerView);
router.post("/register", usersController.register);
<<<<<<< HEAD

//Validacion datos del formulario de creacion

// router.post("/register", upload.single("avatar"),[
//     check("name").isLength({min:1}).withMessage("Debe ingresar un nombre"),
//     check("email").isEmail().withMessage("Debe ser un email valido"),
//     check("password").isLength({min:3}).withMessage("Debe ingresar clave de mas de 3 caracteres"),
//     check("password_confirm").isLength({min:3}).withMessage("Debe ingresar clave de mas de 3 caracteres"),
// ], usersController.store);
// router.get("/login", usersController.login);
=======
router.post("home", usersController.register);
>>>>>>> 36309c1c8fb12f0ecac22c87c2c03fd4445c348d

module.exports = router;




