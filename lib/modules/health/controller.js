'use strict';

// Send health status
exports.check = function(req, res) {
    res.send({
        pid: process.pid,
        memory: process.memoryUsage(),
        uptime: process.uptime()
    });
};
