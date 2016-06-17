var models = require('../models');
var express = require('express');
var router = express.Router();

router.post('/create', function(req, res) {
    models.Task.create({
        task: req.body.task,
        person_id: req.body.person_id
    }).then(function() {
        res.redirect('/');
    });
});

router.get('/:id/destroy', function(req, res) {
    models.Task.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.redirect('/');
    });
});

module.exports = router;
