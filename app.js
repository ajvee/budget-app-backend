const express = require("express");
const app = express();
const budget = require("./models/budget");

app.use(express.json())

app.get("/", (req, res) => {
    res.send("Budget App")
})






module.exports = app;