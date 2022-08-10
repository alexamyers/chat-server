const express = require('express');
const mc = require('./controllers/messages_controller');
const app = express();


app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));

const messagesBaseURL = '/api/messages'
app.get(messagesBaseURL, mc.readMessage);
app.put(`${messagesBaseURL}/:id`, mc.updateMessage);
app.post(messagesBaseURL, mc.createMessage);
app.delete(`${messagesBaseURL}/:id`, mc.deleteMessage);


const port = 3001;
app.listen(port, () => {
    console.log(`all good on port ${port}`)
})