const router = require('express').Router();
let User = require('../models/user.model');

//Routes

//Get all users
router.route('/').get((req, res) => {
    //Mongoose method, find all users, return in json
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Add new user
router.route('/add').post((req,res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;