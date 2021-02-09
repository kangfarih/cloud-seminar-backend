const express = require('express');
const router = express.Router();
const User = require('../models/user');

// add a new ninja to the db
router.get('/user', function (req, res, next) {
    // var userMap = {}
    
    User.find({}, (err, user) => {
        res.send(user)
    }).catch(next);
});

// add a new ninja to the db
router.post('/user', function (req, res, next) {

    User.create(req.body).then(function (user) {
        res.send(user);
    }).catch(next);
});

module.exports = router;