
const cookieController = {

    setCookie(req, res, next) {
        res.cookie('loggedIn', Math.round(Math.random() * 99));
        next();
    }

}

module.exports =cookieController