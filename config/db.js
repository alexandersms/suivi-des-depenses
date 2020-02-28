const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log(`La base de données MongoDB est connectée: ${conn.connection.host}`.cyan.underline.bold)
    } catch (err) {
        console.log(`Erreur: ${err.message}`.red.bold);
        process.exit(1);
    }
}

module.exports = connectDB