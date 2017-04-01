const express = require('express');
const app = express();
const mongoose = require('mongoose');
const userController = require('./user/userController');
const gifController = require('./gif/gifController');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cookieController = require('./cookieController');
const path = require('path');
const cors = require('cors');

app.use(cors());
app.use(function(req, res, next) {
 res.header("Access-Control-Allow-Origin", "*");
 res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, {'Content-Type': 'json/application'}, Accept");
 res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
 //next handles program flow so req and res are set properly for each function
 next();
});

mongoose.connect('mongodb://localhost/giferent');

mongoose.connection.once('open', () => console.log('connected to database'))

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/createUser', cookieController.setCookie);

app.use(express.static(path.join(__dirname, '../build/')))


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'))
})

app.post('/createUser', userController.createUser);

app.post('/verifyUser', userController.verifyUser, (req, res) => {
    res.send()
});

app.post('/createGif', gifController.createGif);

app.get('/sendGif', gifController.sendGifs);

app.listen(3000, () => console.log('connected to server'));
