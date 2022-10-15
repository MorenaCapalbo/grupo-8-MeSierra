const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");
const multer = require("multer");
var bcrypt = require('bcryptjs');

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});


app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(path.resolve(__dirname, "./public")));

app.use(methodOverride("_method"));

//Codigo para usar los formularios e indicarle a nuestro codigo que vamos a trabajar con formularios

app.use(express.urlencoded({ extended: false}));

//Codigo para usar el json dentro de los archivos

app.use(express.json());


//Rutas

const productsRouter = require("./routes/products");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

app.use('/', indexRouter);
app.use('/products', productsRouter); 
app.use('/users', usersRouter);

//Ruta error 404

app.use((req, res) => {
  res.status(404).render("not-found");
})

