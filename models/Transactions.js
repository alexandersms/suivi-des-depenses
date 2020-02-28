const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, "Veuillez ajouter du texte"]
    },
    amount: {
        type: Number,
        required: [true, "Veuillez ajouter un montant positif ou négatif"]
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Transaction', TransactionSchema)