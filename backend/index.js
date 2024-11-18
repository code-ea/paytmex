const express = require("express");
const mainRouter = require("./routes/index");
const cors = require("cors");
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter);
//app.use("/api/v1/user", userRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on https://paytm-4-b3cn.onrender.com`);
  });