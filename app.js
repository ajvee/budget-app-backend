const express = require("express");
const app = express();
const transactions = require("./models/Transactions");

app.use(express.json())

// Get all transactions
app.get('/transactions', (req, res) => {
    res.json(transactions);
  });

// Get a single transaction by ID
app.get('/transactions/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const transaction = transactions.find(t => t.id === id);
    if (transaction) {
      res.json(transaction);
    } else {
      res.sendStatus(404);
    }
  });


module.exports = app;