'use strict';

define([], function() {
    return {
        defaultRoutePath: '/',
        routes: {
            //Global
            '/': {
                templateUrl: '/modules/statusboard/index.html',
                dependencies: [
                    'modules/statusboard/index'
                ]
                ,authenticate: true
            }
            ,'/login': {
                templateUrl: '/modules/login/index.html',
                dependencies: [
                    'modules/login/index'
                ]
            }

            //Modules

            //Settings - References - Item     
            ,'/settings/references/item': {
                templateUrl: '/modules/settings/references/item/list.html',
                dependencies: [
                    'modules/settings/references/item/list'
                ]
                //,authenticate: true
            }
            ,'/settings/references/item/add': {
                templateUrl: '/modules/settings/references/item/add.html',
                dependencies: [
                    'modules/settings/references/item/add'
                ]
                //,authenticate: true
            }

            //Settings - References - Broker            
            ,'/settings/references/broker': {
                templateUrl: '/modules/settings/references/broker/list.html',
                dependencies: [
                    'modules/settings/references/broker/list'
                ]
                //,authenticate: true
            }
            ,'/settings/references/broker/add': {
                templateUrl: '/modules/settings/references/broker/add.html',
                dependencies: [
                    'modules/settings/references/broker/add'
                ]
                //,authenticate: true
            }

            //Settings - References - Supplier            
            ,'/settings/references/supplier': {
                templateUrl: '/modules/settings/references/supplier/view.html',
                dependencies: [
                    'modules/settings/references/supplier/controller'
                ]
                //,authenticate: true
            }

            //Initiate Import - Planner
            ,'/initiateimport/planner': {
                templateUrl: '/modules/initiateimport/planner/create.html',
                dependencies: [
                    'modules/initiateimport/planner/create'
                ]
                //,authenticate: true
            }
            ,'/initiateimport/planner/view': {
                templateUrl: '/modules/initiateimport/planner/view.html',
                dependencies: [
                    'modules/initiateimport/planner/view'
                ]
                //,authenticate: true
            }

            //Initiate Import - Broker
            ,'/initiateimport/broker': {
                templateUrl: '/modules/initiateimport/broker/view.html',
                dependencies: [
                    'modules/initiateimport/broker/controller'
                ]
                //,authenticate: true
            }

            //Assign Forwarder
            ,'/assignforwarder': {
                templateUrl: '/modules/assignforwarder/view.html',
                dependencies: [
                    'modules/assignforwarder/controller'
                ]
                //,authenticate: true
            }

            //Shipment Detail
            ,'/shipmentdetail': {
                templateUrl: '/modules/shipmentdetail/view.html',
                dependencies: [
                    'modules/shipmentdetail/controller'
                ]
                //,authenticate: true
            }

            //Shipment Departure
            ,'/shipmentdeparture': {
                templateUrl: '/modules/shipmentdeparture/view.html',
                dependencies: [
                    'modules/shipmentdeparture/controller'
                ]
                //,authenticate: true
            }

            //Foreign Invoice
            ,'/foreigninvoice': {
                templateUrl: '/modules/foreigninvoice/view.html',
                dependencies: [
                    'modules/foreigninvoice/controller'
                ]
                //,authenticate: true
            }

            //Foreign Invoice
            ,'/customsclearance': {
                templateUrl: '/modules/customsclearance/view.html',
                dependencies: [
                    'modules/customsclearance/controller'
                ]
                //,authenticate: true
            }

            //Customs Charges
            ,'/customscharges/fclcharges': {
                templateUrl: '/modules/customscharges/fclcharges/view.html',
                dependencies: [
                    'modules/customscharges/fclcharges/controller'
                ]
                //,authenticate: true
            }
            ,'/customscharges/lclcharges': {
                templateUrl: '/modules/customscharges/lclcharges/view.html',
                dependencies: [
                    'modules/customscharges/lclcharges/controller'
                ]
                //,authenticate: true
            }
            ,'/customscharges/aircharges': {
                templateUrl: '/modules/customscharges/aircharges/view.html',
                dependencies: [
                    'modules/customscharges/aircharges/controller'
                ]
                //,authenticate: true
            }

            //Delivery
            ,'/delivery': {
                templateUrl: '/modules/delivery/view.html',
                dependencies: [
                    'modules/delivery/controller'
                ]
                //,authenticate: true
            }
        }
    };
});
