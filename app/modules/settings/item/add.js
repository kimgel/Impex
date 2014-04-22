'use strict';

define([
    'app',
    './services',
    '../supplier/services',
    '../broker/services',
    '../forwarder/services',
], function(app, Services, Supplier, Broker, Forwarder) {
    app.controller('ItemAdd', [
        '$scope',
        '$location',
        'ItemsFactory',
        'SuppliersFactory',
        'BrokersFactory',
        'ForwardersFactory',
        function(
            $scope,
            $location,
            ItemsFactory,
            SuppliersFactory,
            BrokersFactory,
            ForwardersFactory
        ) {

            $scope.item = {};
            $scope.docs = [];
            $scope.view = false;
            $scope.submit = function(form) {
                $scope.item.documents = $scope.docs;
                
                ItemsFactory.save($scope.item, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
                        }
                    }else{
                        $location.path('/settings/item');
                        console.log($scope.item);
                    }
                });
            };
            $scope.clear = function() {
                $scope.item = angular.copy({});
            };

            $scope.all = function() {
                SuppliersFactory.query(function(suppliers) {
                    $scope.suppliers = suppliers;
                    $scope.item.supplier = $scope.suppliers[0]._id;
                });
                BrokersFactory.query(function(brokers) {
                    $scope.brokers = brokers;
                    $scope.item.broker = $scope.brokers[0]._id;
                });
                ForwardersFactory.query(function(forwarders) {
                    $scope.forwarders = forwarders;
                    $scope.item.forwarder = $scope.forwarders[0]._id;
                });
            };

            $scope.docAdd = function(doc,category) {
                $scope.docs.push({
                    document_name: doc,
                    document_category: category
                });
            };
            $scope.docRemove = function(doc) {
                $scope.docs.splice($scope.docs.indexOf(doc), 1);
            };
        }
    ]);

});
