const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const tarefasRoutes = require("./routes/tarefasRoutes");
app.use("/tarefas", tarefasRoutes);


module.exports = app; 
