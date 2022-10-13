const express = require("express");
const path = require("path");
const app = express();
const methodOverride = require("method-override");

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(methodOverride("_method"));

//Codigo para usar los formularios e indicarle a nuestro codigo que vamos a trabajar con formularios

app.use(express.urlencoded({ extended: false}));

//Codigo para usar el json dentro de los archivos

app.use(express.json());

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

const productsRoutes = require("./routes/productsRoutes");
const mainRoutes = require("./routes/mainRoutes");

app.use('/', mainRoutes);
app.use('/products', productsRoutes); 

