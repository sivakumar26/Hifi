var express = require('express');
var router = express.Router();
var neo4j = require('neo4j-driver').v1;

var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "neo4j"));
var session = driver.session();



/* GET all users listing. */
router.get('/', function(req, res, next) {
//coding in progress
  res.send('User List');
});


// Post User
router.post('/', function(req, res, next) {

    var email = req.body.email;
    var username = req.body.username;
    //coding in progress
    res.send("User saved");
});



module.exports = router;
