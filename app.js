const {connector} = require("./src/database/conexion");
const {router} = require("./src/routes/notesRoutes");
const express = require("express");
const PORT = 3000;

connector();
const app = express();
app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
    console.log(`Conectado en el puerto --- ${PORT}!`)
});
