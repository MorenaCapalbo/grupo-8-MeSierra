const express= require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");


router.get("/", usersController.list);
router.get("/login", usersController.loginView);
router.post("/login", usersController.login)
router.get("/register", usersController.registerView);
router.post("/register", usersController.register);
router.post("home", usersController.register);

module.exports = router;




