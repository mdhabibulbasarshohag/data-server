const express = require('express');
const app = express();
const cors = require('cors')
const users = require('./users.json')
const port = 5001;

app.use(cors());

app.get('/', (req, res) => {
    res.send('hello world :: ');
});

app.get('/users', (req, res) => {
    res.send(users);
})

app.get('/users/:username', (req, res) => {
    const username = req.params.username;
    console.log(username);
    const user = users.find(us => us.username === username) || {};
    res.send(user);
})
// app.get('/users/:id', (req, res) => {
//     const id = parseInt(req.params.id);
//     console.log(id);
//     const userId = users.find(usi => usi.id === id) || {};
//     res.send(userId);
// })

app.listen(port, () => {
    console.log(`server ready to go... port: ${port}`);
})