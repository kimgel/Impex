'use strict';

define(['app'], function(app) {
    app.factory('Auth',[
        '$location',
        '$rootScope',
        'Session',
        'UsersFactory',
        '$cookieStore',
        function($location, $rootScope, Session, UsersFactory, $cookieStore) {

/* Get currentUser from cookie
=================================================================== */   
            $rootScope.currentUser = $cookieStore.get('user') || null;
            $cookieStore.remove('user');

            return {

/* Authenticate user
=================================================================== */  
                login: function(user, callback) {
                    var cb = callback || angular.noop;

                    return Session.save({
                        username: user.username,
                        password: user.password
                    }, function(user) {
                        $rootScope.currentUser = user;
                        return cb();
                    }, function(err) {
                        return cb(err);
                    }).$promise;
                },

/* Unauthenticate user
=================================================================== */ 
                logout: function(callback) {
                    var cb = callback || angular.noop;

                    return Session.delete(function() {
                            $rootScope.currentUser = null;
                            return cb();
                        },
                        function(err) {
                            return cb(err);
                        }).$promise;
                },

/* Create a new user
=================================================================== */ 
                createUser: function(user, callback) {
                    var cb = callback || angular.noop;

                    return UsersFactory.save(user,
                        function(user) {
                            $rootScope.currentUser = user;
                            return cb(user);
                        },
                        function(err) {
                            return cb(err);
                        }).$promise;
                },

                
/* Change password
=================================================================== */ 
                changePassword: function(oldPassword, newPassword, callback) {
                    var cb = callback || angular.noop;

                    return UsersFactory.update({
                        oldPassword: oldPassword,
                        newPassword: newPassword
                    }, function(user) {
                        return cb(user);
                    }, function(err) {
                        return cb(err);
                    }).$promise;
                },

/* Gets all available info on authenticated user
=================================================================== */ 
                currentUser: function() {
                    return UsersFactory.get();
                },

/* Simple check to see if a user is logged in
=================================================================== */ 
                isLoggedIn: function() {
                    var user = $rootScope.currentUser;
                    return !!user;
                },
            };
        }
    ]);
});
