'use strict';

var path = require('path');

/* Send partial or 404
=================================================================== */ 
exports.partials = function(req, res) {
    var stripped = req.url.split('.')[0];
    var requestedView = path.join('./', stripped);
    res.render(requestedView, function(err, html) {
        if (err) {
            console.log("Error rendering partial '" + requestedView + "'\n", err);
            res.status(404);
            res.send(404);
        } else {
            res.send(html);
        }
    });
};

/* Render Index
=================================================================== */ 
exports.index = function(req, res) {
    res.render('index');
};
