const express = require("express");
const dotenv = require("dotenv");
const expressLayouts = require('express-ejs-layouts');
//Load environment variables
dotenv.config({path: "./config/config.env"});
const connectDB = require("./config/db");
const app = express();
//EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');

connectDB();

app.use("/", require("./routes/index"));

app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
