const express = require('express');
const app = express();
// const { connection } = require('./application')

const PORT = process.env.PORT || 3000;

app.use(express.json())

// connection.connect()

// ROUTES
// app.get('/messages', (req, res) => { getMessages(req, res) });
app.post('/messages', (req, res) => { createUser(req, res) });

app.listen(PORT, () => console.log(`Running on port ${PORT}`));