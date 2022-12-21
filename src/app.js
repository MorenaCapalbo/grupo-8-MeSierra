const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");

//Session y cookie
const session = require("express-session");
const cookieParser = require("cookie-parser");

const multer = require("multer");

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

// sequelize
//const Sequelize = require ("sequelize");
//const Sequelize = new Sequelize ("proyecto-integrador", "root", "",{
//  host: "localhost",
//  dialect: "mysql",
//})


app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

//Requerir session

app.use(session({
  secret: "secret",
  resave: false,
  saveUninitialized: true
}))

//La cookie queda seteada en toda la aplicacion

app.use(cookieParser());

app.use(express.static(path.resolve(__dirname, "./public")));

app.use(methodOverride("_method"));

//Codigo para usar los formularios e indicarle a nuestro codigo que vamos a trabajar con formularios

app.use(express.urlencoded({ extended: false}));

//Codigo para usar el json dentro de los archivos

app.use(express.json());


//Rutas

const productsRouter = require("./routes/products");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/usuarios");
const apiProductRouter = require ("./routes/api/product");
const apiUserRouter = require("./routes/api/user");

app.use('/', indexRouter);
app.use('/products', productsRouter); 
app.use('/usuarios', usersRouter);
app.use("/api/products", apiProductRouter);
app.use("/api/users", apiUserRouter);


//Ruta error 404

app.use((req, res) => {
  res.status(404).render("not-found");
})

