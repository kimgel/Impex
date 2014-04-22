'use strict';

define([
    'app',
    'Items',
    'Suppliers',
    'Brokers',
    'Forwarders',
], function(app, Items, Suppliers, Brokers, Forwarders) {
    app.controller('ItemAdd', [
        '$scope',
        '$location',
        '$aside',
        'ItemsFactory',
        'SuppliersFactory',
        'BrokersFactory',
        'ForwardersFactory',
        function(
            $scope,
            $location,
            $aside,
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
                            if (key != 'documents') {
                                form[key].message = err.errors[key].message;
                            } else {
                                $scope.docError = err.errors['documents'].message;
                            }
                        }
                    } else {
                        $location.path('/settings/item');
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

            $scope.docAdd = function(doc, category) {
                if (doc) {
                    $scope.docs.push({
                        document_name: doc,
                        document_category: category
                    });
                    $scope.docNameError = false;
                }else{
                    $scope.docNameError = true;
                }
            };
            $scope.docRemove = function(doc) {
                $scope.docs.splice($scope.docs.indexOf(doc), 1);
            };
        }
    ]);

});
