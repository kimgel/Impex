'use strict';

var mongoose = require('mongoose'),
    fs = require('fs'),
    config = require('../../config/credentials/aws'),
    fmt = require('fmt'),
    multiparty = require('multiparty'),
    s3 = require('streaming-s3'),
    Document = require('./model').Document;


// get files
exports.getFiles = function(req, res) {

};

// upload file, shorten url and save to db
exports.addFile = function(req, res) {
    var form = new multiparty.Form({
        //uploadDir: config.root + '/uploads/'
    });

    form.on('file', function(name, file) {
        var fileName = file.originalFilename,
            path = file.path;

        var fileStream = fs.createReadStream(path);

        var uploader = new s3(
            fileStream,
            config.aws.key,
            config.aws.secret,
            config.aws.region, {
                Bucket: config.aws.bucket,
                Key: fileName
            }, function(err, resp, stats) {
                if (err) return fmt.dump(err, 'Error');
                fmt.dump(stats, "Stats");
                fmt.dump(resp, "Response");
                // delete local file
                fs.unlinkSync(path)
                res.send(200);
            }
        );

    });
    form.parse(req);
};
// delete file
exports.removeFile = function(req, res) {

};

// save to the db
var save = function(safe, url, cb) {

};
