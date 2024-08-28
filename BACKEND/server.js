const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Mongodb connection successful");
}).catch((error) => {
    console.error("Mongodb connection error:", error);
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb connection successful");
});

const studentRouter = require("./routes/students.js"); // Correct path

app.use("/student", studentRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
