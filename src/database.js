const mongoose = require('mongoose');

const URL = process.env.MONGODB_URL ? process.env.MONGODB_URL : 'mongodb://localhost/mern-app';

mongoose.connect( URL , {
    useNewUrlParser: true, 
    useCreateIndex: true,
    useFindAndModify: false
});

const connection = mongoose.connection;

connection.once('open', () => {
    console.log("DB connected!")
})