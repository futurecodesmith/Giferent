const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gifSchema = new Schema({
    title: { type: String, required: true },
    gifURL: { type: String, required: true },
    audio: { type: Buffer, contentType: String, required: true },
    likeCount: { type: Number, required: true },
    creator: { type: String, required: true },
    sendURL: { type: String, required: true },
})

module.exports = mongoose.model('gif', gifSchema);