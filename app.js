const express = require('express');

const userDb = require('./users/users');

const app = express();


app.listen(5000, () => {
    console.log('Server listen 5000');
});


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/users', (req, res) => {
    console.log("users endpoint works");
    res.json(userDb);
})

app.get('/users/:id', (req, res) => {
    console.log(req.params);

    const {id} = req.params;

    res.json(userDb[id]);
});


app.post('/users', (req, res) => {
    const userInfo = req.body;
    userDb.push(userInfo);
    res.status(201).json('Created')
});


app.delete('/users/:id', (req, res) => {
    const id = req.params.id;
    userDb.splice(id, 1)
    res.send('Example removed');
});


app.put('/users/:id', (req, res) => {
    const newUserInfo = req.body;
    const id = req.params.id;
    userDb[id] = newUserInfo;
    res.json('Updated')
});

app.get('/', (req, res) => {
    res.json('WELCOME')
})