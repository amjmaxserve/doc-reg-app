const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
const userRoute = require("./routes/userRoute");

app.use("/api/user", userRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Node Server started at Port ${port}`));
