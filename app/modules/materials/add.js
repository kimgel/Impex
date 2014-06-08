'use strict';

define([
    'app',
    'Materials',
    'Suppliers',
    'Brokers',
    'Forwarders',
    'ShippingLines',
    'RegulatoryDocuments'
], function(app) {
    app.controller('ItemAdd', [
        '$scope',
        '$state',
        'MaterialsFactory',
        'SuppliersFactory',
        'BrokersFactory',
        'ForwardersFactory',
        'ShippingLinesFactory',
        'RegulatoryDocsFactory',
        function(
            $scope,
            $state,
            MaterialsFactory,
            SuppliersFactory,
            BrokersFactory,
            ForwardersFactory,
            ShippingLinesFactory,
            RegulatoryDocsFactory
        ) {

            $scope.material = {};
            $scope.process = {};
            $scope.documents = [];

            $scope.view = false;

            $scope.submit = function(form) {
                $scope.material.process = $scope.process;

                MaterialsFactory.save($scope.material, function(err) {
                    if (err.errors) {
                        for (var key in err.errors) {
                            form[key].message = err.errors[key].message;
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
                ShippingLinesFactory.query(function(shippinglines) {
                    $scope.shippinglines = shippinglines;
                    $scope.material.shipping_line = $scope.shippinglines[0]._id;
                });
            };

            $scope.requirements = [{
                    title: 'Processing Time',
                    template: '/modules/materials/tpls/processingtime.tpl.html'
                },{
                    title: 'Processing Documents',
                    template: '/modules/materials/tpls/processingdocuments.tpl.html'
                },{
                    title: 'Regulatory Documents',
                    template: '/modules/materials/tpls/regulatorydocuments.tpl.html'
                }
            ];

            $scope.addDocument = function(stepNumber, documentName){
                if (documentName) {

                    $scope.documents.push({
                        stepNumber: stepNumber,
                        requiredDocument: documentName
                    });
                }
            };

            $scope.removeDocument = function(doc) {
                $scope.documents.splice($scope.documents.indexOf(doc), 1);
            };

            $scope.loadRegulatoryDocuments = function() {
                RegulatoryDocsFactory.query({
                    select: "name,valid_until"
                },function(regulatoryDocuments) {
                    $scope.regulatoryDocuments = regulatoryDocuments;
                });
            };
        }
    ]);

});
