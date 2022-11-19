const express = require("express");
const cors = require("cors");
const { studentRouter } = require("./src/modules/students/students.routes");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT;
const NODE_ENV = process.env.NODE_ENV;
const allowList = process.env.CORS_ALLOW_LIST.split(";");

const configCors = {
  origin: allowList,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE"
}

app.use(express.json());
app.use(cors(configCors));

app.get("/", async (req, res) => {
  res.status(200).send("Api is online!");
});

app.use("/students", studentRouter);

app.listen(PORT, () => {
  console.log(`Api is running in ${NODE_ENV} mode.`);
  console.log(``);
  console.log(`On port ${PORT}`);
});
