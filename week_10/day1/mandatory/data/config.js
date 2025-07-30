const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_HOST, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connected to MongoDB with Mongoose');
    } catch (err) {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Stop l’app si la connexion échoue
    }
}

module.exports = connectDB;
