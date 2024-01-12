const express = require('express');
const app = express();
const cors = require('cors');
const controller = require('./controller');
app.use(cors());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

app.get('/users', (req, res) => {
    controller.getUsers(users => {
        res.send(users);
    });
});

app.get('/user', (req, res) => {
    const id = parseInt(req.query.id);

    if (isNaN(id)) {
        return res.status(400).send('Invalid or missing user ID');
    }

    controller.getUserById(id, user => {
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.send(user);
    });
});

module.exports = app;
