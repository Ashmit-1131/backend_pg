const mongoose = require("mongoose");
require("dotenv").config();

// Ensure the connection string exists
if (!process.env.mongoUrl) {
    throw new Error("MongoDB connection string (mongoUrl) is missing in the .env file");
}

// Establish connection
const connection = mongoose.connect(process.env.mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Connected to MongoDB successfully");
}).catch((err) => {
    console.error("Failed to connect to MongoDB", err);
});

// Export connection
module.exports = {
    connection,
};
