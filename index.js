require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/routes');
const mongoString = process.env.DATABASE_URL
const app = express();
const bodyParser = require('body-parser');
mongoose.connect(mongoString);
const database = mongoose.connection

database.on('error',(error) => {
    console.log(error)
})

database.once('connected',() => {
    console.log('Database Connected');
})

// Let's use routes file
app.use('/api',routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.json());
// Starting the Server 
app.listen(3000, ()=>{
    console.log("Server is started at PORT:3000")
})