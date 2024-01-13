express = require('express');


const messages = []

async function getIndex(req, res) {
    res.render('index', { title: 'Mini Message Board', messages: messages });
}

async function getNewMessage(req, res) {
    res.render('form', { title: 'Mini Message Board' });
}

async function postNewMessage(req, res){
    const {user, text} = req.body;
    messages.unshift({user, text, added: new Date().toLocaleString()});
    res.redirect('/');
}

module.exports = {
    getIndex,
    getNewMessage,
    postNewMessage
}