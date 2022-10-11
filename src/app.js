const express = require("express");
const path = require("path");
const app = express();

app.listen(3000, () => {
  console.log("Servidor corriendo en el puerto 3000");
});

app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

const mainRoutes = require("./routes/mainRoutes");
app.use('/', mainRoutes);

// Ruta de products por GET

const productsRoutes = require("./routes/products.js");

app.use('/products', productsRoutes);
