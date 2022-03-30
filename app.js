const express = require('express');
const debug = require('debug');
const res = require('express/lib/response');

const app = express();

app.get('/', () => {
    res.send('Hello world');
})

const server = app.listen(process.env.Port||3000, ()=>{debug("App listening");});

module.exports = server;