const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.mongoDbClient, {
            useNewUrlParser: true
        });

        console.log('Database Connected');

    }catch(error){
        console.log('Error ', error);
        process.exit(1);
    }
}

module.exports = connectDB;