/**
 * Created by ssivaraman on 12/21/16.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/hifi');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

var Schema = mongoose.Schema;

var postSchema = new Schema({
    postid: { type: String, required: true, unique: true },
    title: String,
    userid: { type: String, required: true },
    content: { type: String, required: true },
    tags: [String],
    location : {
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: [Number]
    },
    created_at: { type: Date, default: Date.now }
});

postSchema.index({location:'2dsphere'});

var posts = mongoose.model('posts', postSchema);

module.exports = posts;