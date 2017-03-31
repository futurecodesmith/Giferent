const gif = require('./gifModel.js');

const gifController = {

    createGif(req, res) {
        gif.create({
            title: req.body.title,
            gifURL: req.body.gifURL,
            // sound: { type: Buffer, contentType: String, required: true },
            likeCount: req.body.likeCount,
            creator: req.body.creator,
            sendURL: req.body.sendURL,
        },(err, result) => {
            if(err) console.log(err);
            return res.send('Gif has been saved');
        })
    },

    sendGifs(req, res) {
       gif.find({}, (err, result) => {
           if (!result) {
               return res.status(404).json("No result found");
           } else {
               return res.status(200).json(result);
           }
       }) 
    }

}

module.exports = gifController