const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
        await mongoose.connect(
            process.env.DB_CONNECTION,
            {
                useNewUrlParser: true,
                useFindAndModify: false,
                useCreateIndex: true,
                useUnifiedTopology: true,
            }
        );
        console.log("Connection with mongo is OK");
    } catch (error) {
        console.log("Failed to connect with Mongo, error: " + error);
        throw new Error("Failed to connect with Mongo, error: " + error);
    }
};

module.exports = { dbConnect };