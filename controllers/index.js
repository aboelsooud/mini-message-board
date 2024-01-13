express = require('express');


const messages = [
    {
        user: 'John Doe',
        text: 'Hello World',
        added: new Date(),
    },
    {
        user: 'Jane Doe',
        text: 'Hi, John!',
        added: new Date(),
    }
]

async function index(req, res) {
    res.render('index', { title: 'Mini Message Board', messages: messages });
}


module.exports = {
    index
}