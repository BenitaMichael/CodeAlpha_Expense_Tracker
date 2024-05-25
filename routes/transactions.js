const express = require('express');
const router = express.Router();
const { getTransactions, addTransaction, delTransaction } = require('../controllers/transactions')

router.route('/')
.get(getTransactions)
.post(addTransaction)
.delete(delTransaction);

router.route('/:id')
.delete(delTransaction)

module.exports = router;