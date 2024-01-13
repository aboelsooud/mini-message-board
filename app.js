const path = require('path');

const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'ejs')

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes setup
const indexRouter = require('./routes/index');

app.use('/', indexRouter);


mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to database');
    app.listen(process.env.PORT, () => {
        console.log(`Server running on port ${process.env.PORT}`);
    });
}).catch((err) => {
    console.log(err);
});

