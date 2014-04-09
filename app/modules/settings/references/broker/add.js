'use strict';

define(['app'], function(app) {
        app.controller('BrokerAdd', [
            '$scope',
            '$location',
            '$http',
            function($scope, $location, $http) {

                $scope.broker = {};

                $scope.submit = function(form) {

                    var data = {
                        'broNo': $scope.broker.no,
                        'broName': $scope.broker.name,
                        'broAddress': $scope.broker.address,
                        'broContactPerson': $scope.broker.contact,
                        'broEmail': $scope.broker.email,
                        'broTelNo': $scope.broker.tel
                    };

                    $http.post('/api/settings/broker', data).success(function(res) {
                        //$location.path("/");
                        console.log(res);
                    });
                }
            }
        ]);
});
