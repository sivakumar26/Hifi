/**
 * Created by ssivaraman on 11/15/16.
 */

var express = require('express');
var router = express.Router();
var posts = require('../models/posts');
var shortid = require('shortid');

/* get all tasks. */
router.get('/', function(req, res, next) {
    posts.find({}, function(err, post) {
        if (err){
            res.status(500);
            res.send(err);
        }
        // object of all the posts
        res.status(201);
        res.send(post);
    });
});



/* post a task. */
router.post('/', function(req, res, next) {

    var post = new posts({
        postid: shortid.generate(),
        title:req.body.title,
        userid:req.body.userid,
        content:req.body.content,
        tags:req.body.tags
    });
    post.save(function(err) {
        if (err) {
            res.status(500);
            res.send(err);
        }
        res.status(201);
        res.send("posted successfully");
    });
});

module.exports = router;

