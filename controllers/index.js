express = require('express');

const Message = require('../models/message');

async function getIndex(req, res) {
    const messages = await Message.find();
    res.render('index', { title: 'Mini Message Board', messages: messages });
}

async function getNewMessage(req, res) {
    res.render('form', { title: 'Mini Message Board' });
}

async function postNewMessage(req, res){
    const {user, text} = req.body;
    try{
        const message = new Message({user, text, added: new Date()});
        await message.save();
        res.redirect('/');
    }catch(err){
        console.log(err);
        res.status(500).send('Error saving message');
    }
    
}

module.exports = {
    getIndex,
    getNewMessage,
    postNewMessage
}