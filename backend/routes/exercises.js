const router = require('express').Router();
let Exercise = require('../models/exercise.model');

//Routes

//Get all exercises
router.route('/').get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

//Add new exercise
router.route('/add').post((req,res) => {
    const username = req.body.username;
    const descripton = req.body.descripton;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);


    const newExercise = new Exercise({
        username,
        descripton,
        duration,
        date
    });

    newExercise.save()
        .then(() => res.json('Exercise added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;