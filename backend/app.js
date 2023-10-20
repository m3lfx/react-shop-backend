const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')
const cors = require('cors')
const products = require('./routes/product');
const auth = require('./routes/auth');

app.use(express.json());

app.use(express.urlencoded({limit: "100mb", extended: true }));
app.use(cors({
    origin: "http://localhost:3000",
    }));
app.use(cookieParser());

app.use('/api/v1',products);
app.use('/api/v1',auth);
module.exports = app