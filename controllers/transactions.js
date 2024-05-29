const Transaction = require('../models/Transaction');

// Gets all transactions
// route: GET: /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            count: transactions.length,
            data: transactions
        });
    } catch (error) {
        console.error('Error fetching transactions:', error.message);
        if (error.name === 'ValidationError') {
            const err_messages = Object.values(error.errors).map(value => value.message);

            return res.status(400).json({
                success: false,
                error: err_messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
};


// Adds new transaction
// route: POST: /api/v1/transactions
exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body;

        const transaction = await Transaction.create(req.body);

        return res.status(201).json({
            success: true,
            data: transaction
        });
    } catch (error) {
        console.error('Error adding transaction:', error.message);
        if (error.name === 'ValidationError') {
            const err_messages = Object.values(error.errors).map(value => value.message);

            return res.status(400).json({
                success: false,
                error: err_messages
            });
        } else {
            return res.status(500).json({
                success: false,
                error: 'Server Error'
            });
        }
    }
};


// Delete transaction
// route: DELETE: /api/v1/transactions/:id
exports.delTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);

        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: 'Transaction does not exist'
            });
        }

        await transaction.deleteOne();

        return res.status(200).json({
            success: true,
            data: {}
        });
    } catch (error) {
        console.error('Error deleting transaction:', error.message);
        return res.status(500).json({
            success: false,
            error: 'Server Error'
        });
    }
};
