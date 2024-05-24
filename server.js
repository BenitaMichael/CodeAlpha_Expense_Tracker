const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

dotenv.config({path: './config/config.env'})

const app = express();

app.get('/', (req, res) =>{
    res.send('Hello Bunnie')
})

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`App running in ${process.env.NODE_ENV} on ${PORT}`));