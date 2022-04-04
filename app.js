const express = require("express");
const cors = require("cors");
const router = require("./routers/index");

const app = express();
// const HOST = "192.168.45.105";
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.listen(PORT, () => {
  console.log(`listening at http://localhost:${PORT}`);
});
module.exports = app;
