'use strict';

var passport = require('passport'), 
    LocalStrategy = require('passport-local').Strategy,
    User = require('../modules/user/schema').User;

/**
 * Passport configuration
 */
passport.serializeUser(function(user, done) {
    done(null, user.id);
});
passport.deserializeUser(function(id, done) {
    User.findOne({
        _id: id
    }, '-salt -hashedPassword', function(err, user) { // don't ever give out the password or salt
        done(err, user);
    });
});

// add other strategies for more authentication flexibility
passport.use(new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password' // this is the virtual field on the model
    },
    function(username, password, done) {
        User.findOne({
            username: username
        }, function(err, user) {
            if (err) return done(err);

            if (!user) {
                return done(null, false, {
                    message: 'Username is not registered.'
                });
            }
            if (!user.authenticate(password)) {
                return done(null, false, {
                    message: 'Password is incorrect.'
                });
            }
            return done(null, user);
        });
    }
));

module.exports = passport;
