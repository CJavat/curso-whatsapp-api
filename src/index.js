const express = require("express");
const apiRoute = require("./routes/routes");
require("dotenv").config(); // Cargar las variables de entorno

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/whatsapp", apiRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
