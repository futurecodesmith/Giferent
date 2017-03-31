const user = require('./userModel.js');
const cookieController = require('./../cookieController');


const userController = {

    createUser(req,res) {
        user.create({
            username: req.body.username,
            password: req.body.password,
        }, (err, result) => {
            if(err) console.log(err);
            res.send(result);
        })
    },
    verifyUser(req, res) {
        user.findOne({ username: req.body.username }, (err, result) => {
            if (result === null) {
                return res.send(false);
            } else {
                if (result.password === req.body.password) {
                    return res.send(true);
                } else {
                    return res.send(false);
                }
            }
        })
    }





};

module.exports = userController;