
const cookieController = {

    setCookie(req, res, next) {
        res.cookie('loggedIn', Math.round(Math.random() * 99));
        next();
    },

    isLoggedIn(req,res,next) {

        if(req.cookies.loggedIn){
            res.send(true);
        } else {
            res.send(false);
        }
    }

}

module.exports =cookieController