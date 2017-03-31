const user = require('./userModel.js');
const cookieController = require('./../cookieController');


const userController = {

    createUser(req, res) {
        user.create({
            username: req.body.username,
            password: req.body.password,
            created: req.body.created,
        }, (err, result) => {
            if (err) throw err;
            cookieController.setCookie(req, res, (result) => {
                res.send('cookie has been set');
            })
            return res.send('User has been created')
        })

    },

    verifyUser(req, res) {
        user.findOne({username: req.body.username}, (err, result) => {
            console.log(result)
            if (result === null) {
                console.log('IST HIS FLASE')
                return res.send(false);
            } else {
                if(result.password === req.body.password) {
                    return res.send(true);
                } else {
                    return res.send(false);
                }
            }
        })
    }





};

module.exports = userController;