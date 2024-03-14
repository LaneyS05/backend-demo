import path from "path";

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const personRoutes = require("./Routes/Person");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/person", personRoutes);

// serve static front end in production mode
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, 'client', 'build')));
}


// db connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("db connected"))
  .catch((err: any) => console.error(err));

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`listen on port ${PORT}`));
