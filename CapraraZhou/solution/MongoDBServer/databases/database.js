const mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost:27017/FootballXData';
connection = mongoose.connect(mongoDB, {family: 4})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.log('Error : Connection to MongoDB failed' + JSON.stringify(error));
    });