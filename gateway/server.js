const express = require('express');
const fetch = require("node-fetch");

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', async function(req, res) {

    console.log("forwarding to frontend")
    let redirectRes = await fetch("http://mad-frontend:3000/")
    let html = await redirectRes.text()
    res.send(html)

});

app.get('/users/*', async function(req, res) {

    console.log("forwarding to users")
    let suffix = req.url.split("/users/")[1]
    let redirectRes = await fetch("http://mad-users:3000/" + suffix)
    let html = await redirectRes.text()
    console.log("returning response to requester")
    res.send(html)

});

app.get('/forum/*', async function(req, res) {

    console.log("forwarding to forum")
    let suffix = req.url.split("/forum/")[1]
    let redirectRes = await fetch("http://mad-forum:3000/" + suffix)
    let html = await redirectRes.text()
    console.log("returning response to requester")
    res.send(html)

});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);