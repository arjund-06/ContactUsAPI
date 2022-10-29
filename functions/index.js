const express = require('express');

const { createMessage, getMessages, getMessageByEmail } = require('./apis/messages');

const app = express();
// const { connection } = require('./application')

const PORT = process.env.PORT || 3000;

app.use(express.json())

// connection.connect()

// ROUTES
app.get('/messages', (req, res) => { getMessages(req, res) });
app.get('messages/:email', (req, res) => { getMessageByEmail(req, res) });
app.post('/messages', (req, res) => { createMessage(req, res) });

app.listen(PORT, () => console.log(`Running on port ${PORT}`));