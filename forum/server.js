const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/hello', (req, res) => {
  console.log("Sending hello!")
  res.send('Hello from the forum service');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
