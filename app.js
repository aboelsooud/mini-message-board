const path = require('path');

const express = require('express');
const logger = require('morgan');

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



app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
