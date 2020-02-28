// @desc   Get des toutes les transactions
// @route  GET /api/v1/transactions
// @access Public
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions')
}

// @desc   Ajouter une
// @route  POST /api/v1/transactions
// @access Public
exports.addTransaction = (req, res, next) => {
    res.send('POST transaction')
}

// @desc   Supprimer une transaction
// @route  DELETE /api/v1/transactions
// @access Public
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transaction')
}