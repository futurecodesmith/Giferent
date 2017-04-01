const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userController = require('./user/userController');
const gifController = require('./gif/gifController');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieController = require('./cookieController');
const path = require('path');

mongoose.connect('mongodb://localhost/giferent');

mongoose.connection.once('open', () => console.log('connected to database'))

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

// app.use('/createUser', cookieController.setCookie);

app.use(express.static(path.join(__dirname, '../build/')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.post('/createUser', userController.createUser);

app.post('/verifyUser', userController.verifyUser);

app.post('/createGif', gifController.createGif);

app.get('/sendGif', gifController.sendGifs);

app.listen(3000, () => console.log('connected to server'));
