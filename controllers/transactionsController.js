const transactions = require("../models/Transactions")

// Get all transactions
function getAllTransactions(_, res) {
    res.json(transactions);
  };

  // Get a single transaction by ID
function getTransactionById (req, res) {
    const id = parseInt(req.params.id);
    const transaction = transactions.find(t => t.id === id);
    if (transaction) {
      res.json(transaction);
    } else {
      res.sendStatus(404);
    }
  };

  // Create a new transaction
function createTransaction(req, res) {
    const newTransaction = req.body;
    newTransaction.id = transactions.length + 1;
    transactions.push(newTransaction);
    res.sendStatus(201);
  }

  // Update a transaction by ID
function updateTransactionById(req, res) {
    const id = parseInt(req.params.id);
    const updatedTransaction = req.body;
    const index = transactions.findIndex(t => t.id === id);
    if (index !== -1) {
      transactions[index] = updatedTransaction;
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  }

  // Delete a transaction by ID
function deleteTransactionById(req, res) {
    const id = parseInt(req.params.id);
    const index = transactions.findIndex(t => t.id === id);
    if (index !== -1) {
      transactions.splice(index, 1);
      res.sendStatus(204);
    } else {
      res.sendStatus(404);
    }
  }
  

  module.exports = {
    getAllTransactions,
    getTransactionById,
    createTransaction,
    updateTransactionById,
    deleteTransactionById
  };