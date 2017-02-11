var express = require('express');
var router = express.Router();
var neo4j = require('neo4j-driver').v1;

var driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "siva"));
driver.onError = function(error) {
    console.log('Driver instantiation failed', error);
};

//CREATE (ee:Person { name: "Emil", from: "Sweden", klout: 99 })

/* GET all users listing. */
router.get('/', function(req, res, next) {
//coding in progress
  res.send('User List');
});


// Post User
router.post('/', function(req, res, next) {
    var email = req.body.email;
    var username = req.body.username;
    var session = driver.session();
    session
        .run('CREATE (user:User {email: {email}, username: {username}}) RETURN user',{
            email: email,
            username: username
        })
        .then(function(result){
            result.records.forEach(function(record) {
                console.log(record._fields);
            });
            // Completed!
            session.close();
        })
        .catch(function(error) {
            console.log(error);
        });
    res.send("User saved");
});



module.exports = router;
