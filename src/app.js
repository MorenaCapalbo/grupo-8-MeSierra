const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");

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

app.use('/', productsRouter);
app.use('/products', indexRouter); 

//Ruta error 404

app.use((req, res) => {
  res.status(404).render("not-found");
})

