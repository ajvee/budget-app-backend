const express = require("express");
const app = express();
const transactionsController = require("./controllers/transactionsController")

app.use(express.json())

// Default endpoint
app.get('/', (req, res) => {
    res.send('Welcome to the transactions API!');
  });
  

app.get('/transactions', transactionsController.getAllTransactions);

// Get a single transaction by ID
app.get('/transactions/:id', transactionsController.getTransactionById);

// Create a new transaction
app.post('/transactions', transactionsController.createTransaction);

// Update a transaction by ID
app.put('/transactions/:id', transactionsController.updateTransactionById);

// Delete a transaction by ID
app.delete('/transactions/:id', transactionsController.deleteTransactionById);

module.exports = app;