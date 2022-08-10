let messages = [];
let id = 0;

module.exports = {
    createMessage: (req, res) => {
        const {text, time} = req.body;
        messages.push({ id, text, time});
        id++;
        res.status(200).send(messages);
    }, 

    readMessage: (req, res) => {
        res.status(200).send(messages);
    }, 

    updateMessage: (req, res) => {
        const { text } = req.body;
        const updateId = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateId);
        let message = messages[messageIndex];

        messages[messageIndex] = {
            id: message.id,
            text: text || message.text,
            time: message.time
        };

        res.status(200).send(messages);
    }, 

    deleteMessage: (req, res) => {
        const textToDelete = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == textToDelete);

        messages.splice(messageIndex, 1);
        res.status(200).send(messages);

    }
}