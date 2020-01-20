const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

mongoose.connection.on('connected',function(){
    console.log("Mongoose default connection connect");
});
mongoose.connection.on('disconnected',function(){
    console.log("Mongoose default connection disconnect");
});
mongoose.connection.on('error',function(error){
    console.log("Mongoose default connection error: " + error);
});
process.on('SIGINT',function(){
    mongoose.connection.close(function(){
        console.log("Mongoose default connection disconnected through app termination");
        process.exit();
    });
});


const usersRouter = require('./routes/users');


app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});


