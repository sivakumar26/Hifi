/**
 * Created by ssivaraman on 11/16/16.
 */
var express = require('express');
var router = express.Router();
//var bodyParser = require("body-parser");

var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyBDNOg-HiOooDaQ3CWm49ClgVpL1OUdSxY'
});

router.post('/', function(req, res, next) {
    var origin = req.body.origin;
    var destination = req.body.destination;
    var waypoint = req.body.waypoint;
    var time = new Date().getTime();

    googleMapsClient.directions({
        origin: origin ,
        destination: destination,
        departure_time: time,
        mode: 'driving',
        waypoints: waypoint,
        alternatives: true,
        avoid: ['tolls', 'ferries'],
        traffic_model: 'best_guess',
        optimize: true
    }, function (err, response) {
        if(!err){
 /*
                }
            }*/

            res.send(response.json);

            //console.log(JSON.parse(JSON.stringify(response.json)));
        }
    });
});

module.exports = router;

//'Amphitheatre Pkwy, Mountain View, CA'
//'San José State University, CA'
//'SAP Center, San Jose, CA'