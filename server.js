const express = require("express");
const dotenv = require("dotenv");
require("colors");
const cors = require("cors");

const errorHandler = require("./middleware/error");
const conectDB = require("./config/db");

const events = require("./routes/events");
const contact = require("./routes/contact");

dotenv.config({path: "./config/config.env"});

conectDB();

const app = express();
app.use(express.json());

// Protect
app.use(cors());

app.use("/api/events", events);
app.use("/api/contact", contact);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`.yellow.bold));