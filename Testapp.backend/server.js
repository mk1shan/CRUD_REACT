const express = require('express');
const app = express();
const cors = require('cors');

const router = require('./router');
const port = 3001;
const host = '127.0.0.1';
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

const uri = 'mongodb+srv://mudipakishanimayanga:mki123@cluster99.be1xept.mongodb.net/?retryWrites=true&w=majority';

const connect = async () => {
    try {
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('MongoDB error:', error);
    }
};

connect();

const server = app.listen(port, host, () => {
    console.log(`Node server is listening to ${server.address().port}`);
});

app.use('/api', router);
