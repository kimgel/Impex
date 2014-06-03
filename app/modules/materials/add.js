'use strict';

define([
    'app',
    'Materials',
    'Suppliers',
    'Brokers',
    'Forwarders',
], function(app, Materials, Suppliers, Brokers, Forwarders) {
    app.controller('ItemAdd', [
        '$scope',
        '$state',
        'MaterialsFactory',
        'SuppliersFactory',
        'BrokersFactory',
        'ForwardersFactory',
        function(
            $scope,
            $state,
            MaterialsFactory,
            SuppliersFactory,
            BrokersFactory,
            ForwardersFactory
        ) {

            $scope.material = {};
            $scope.schedule = {};
            $scope.docs = [];
            $scope.view = false;
            $scope.submit = function(form) {
                $scope.material.documents = $scope.docs;
                $scope.material.schedule = $scope.schedule;

                MaterialsFactory.save($scope.material, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            if (key != 'documents') {
                                form[key].message = err.errors[key].message;
                            } else {
                                $scope.docError = err.errors['documents'].message;
                            }
                        }
                    } else {
                        $state.go('settings_materials');
                    }
                });
            };
            $scope.clear = function() {
                $scope.material = angular.copy({});
            };

            $scope.all = function() {
                SuppliersFactory.query(function(suppliers) {
                    $scope.suppliers = suppliers;
                    $scope.material.supplier = $scope.suppliers[0]._id;
                });
                BrokersFactory.query(function(brokers) {
                    $scope.brokers = brokers;
                    $scope.material.broker = $scope.brokers[0]._id;
                });
                ForwardersFactory.query(function(forwarders) {
                    $scope.forwarders = forwarders;
                    $scope.material.forwarder = $scope.forwarders[0]._id;
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

            $scope.requirements = [{
                    title: 'Processing Time'
                },{
                    title: 'Process Documents'
                },{
                    title: 'Regulatory Documents'
                }
            ];
        }
    ]);

});
