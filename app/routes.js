'use strict';

define([], function() {
    return {
        defaultRoutePath: '/',
        routes: {            
            '/login': {
                templateUrl: '/modules/login/index.html',
                dependencies: [
                    'modules/login/index'
                ]
            }

            //Modules

            //Home
            ,'/': {
                templateUrl: '/modules/statusboard/index.html',
                dependencies: [
                    'modules/statusboard/index'
                ]
                ,authenticate: true
            }

            //Settings - Item     
            ,'/settings/item': {
                templateUrl: '/modules/settings/item/list.html',
                dependencies: [
                    'modules/settings/item/list'
                ]
                ,authenticate: true
            }
            ,'/settings/item/add': {
                templateUrl: '/modules/settings/item/add.html',
                dependencies: [
                    'modules/settings/item/add'
                ]
                ,authenticate: true
            }

            //Settings - Broker            
            ,'/settings/broker': {
                templateUrl: '/modules/settings/broker/list.html',
                dependencies: [
                    'modules/settings/broker/list'
                ]
                ,authenticate: true
            }
            ,'/settings/broker/add': {
                templateUrl: '/modules/settings/broker/add.html',
                dependencies: [
                    'modules/settings/broker/add'
                ]
                ,authenticate: true
            }
            ,'/settings/broker/:brokerId': {
                templateUrl: '/modules/settings/broker/view.html',
                dependencies: [
                    'modules/settings/broker/view'
                ]
                ,authenticate: true
            },
            '/settings/broker/:brokerId/edit': {
                templateUrl: '/modules/settings/broker/edit.html',
                dependencies: [
                    'modules/settings/broker/edit'
                ]
                ,authenticate: true
            }

            //Settings - Supplier          
            ,'/settings/supplier': {
                templateUrl: '/modules/settings/supplier/list.html',
                dependencies: [                    
                    'modules/settings/supplier/list'
                ]
                ,authenticate: true
            }
            ,'/settings/supplier/add': {
                templateUrl: '/modules/settings/supplier/add.html',
                dependencies: [
                    'modules/settings/supplier/add'
                ]
                ,authenticate: true
            }
            ,'/settings/supplier/:supplierId': {
                templateUrl: '/modules/settings/supplier/view.html',
                dependencies: [
                    'modules/settings/supplier/view'
                ]
                ,authenticate: true
            },
            '/settings/supplier/:supplierId/edit': {
                templateUrl: '/modules/settings/supplier/edit.html',
                dependencies: [
                    'modules/settings/supplier/edit'
                ]
                ,authenticate: true
            }


            //Settings - Forwarder          
            ,'/settings/forwarder': {
                templateUrl: '/modules/settings/forwarder/list.html',
                dependencies: [                    
                    'modules/settings/forwarder/list'
                ]
                ,authenticate: true
            }
            ,'/settings/forwarder/add': {
                templateUrl: '/modules/settings/forwarder/add.html',
                dependencies: [
                    'modules/settings/forwarder/add'
                ]
                ,authenticate: true
            }
            ,'/settings/forwarder/:forwarderId': {
                templateUrl: '/modules/settings/forwarder/view.html',
                dependencies: [
                    'modules/settings/forwarder/view'
                ]
                ,authenticate: true
            },
            '/settings/forwarder/:forwarderId/edit': {
                templateUrl: '/modules/settings/forwarder/edit.html',
                dependencies: [
                    'modules/settings/forwarder/edit'
                ]
                ,authenticate: true
            }

            //Initiate Import - Planner
            ,'/initiateimport/planner': {
                templateUrl: '/modules/initiateimport/planner/create.html',
                dependencies: [
                    'modules/initiateimport/planner/create'
                ]
                ,authenticate: true
            }
            ,'/initiateimport/planner/view': {
                templateUrl: '/modules/initiateimport/planner/view.html',
                dependencies: [
                    'modules/initiateimport/planner/view'
                ]
                ,authenticate: true
            }

            //Initiate Import - Broker
            ,'/initiateimport/broker': {
                templateUrl: '/modules/initiateimport/broker/view.html',
                dependencies: [
                    'modules/initiateimport/broker/controller'
                ]
                ,authenticate: true
            }

            //Assign Forwarder
            ,'/assignforwarder': {
                templateUrl: '/modules/assignforwarder/view.html',
                dependencies: [
                    'modules/assignforwarder/controller'
                ]
                ,authenticate: true
            }

            //Shipment Detail
            ,'/shipmentdetail': {
                templateUrl: '/modules/shipmentdetail/view.html',
                dependencies: [
                    'modules/shipmentdetail/controller'
                ]
                ,authenticate: true
            }

            //Shipment Departure
            ,'/shipmentdeparture': {
                templateUrl: '/modules/shipmentdeparture/view.html',
                dependencies: [
                    'modules/shipmentdeparture/controller'
                ]
                ,authenticate: true
            }

            //Foreign Invoice
            ,'/foreigninvoice': {
                templateUrl: '/modules/foreigninvoice/view.html',
                dependencies: [
                    'modules/foreigninvoice/controller'
                ]
                ,authenticate: true
            }

            //Foreign Invoice
            ,'/customsclearance': {
                templateUrl: '/modules/customsclearance/view.html',
                dependencies: [
                    'modules/customsclearance/controller'
                ]
                ,authenticate: true
            }

            //Customs Charges
            ,'/customscharges/fclcharges': {
                templateUrl: '/modules/customscharges/fclcharges/view.html',
                dependencies: [
                    'modules/customscharges/fclcharges/controller'
                ]
                ,authenticate: true
            }
            ,'/customscharges/lclcharges': {
                templateUrl: '/modules/customscharges/lclcharges/view.html',
                dependencies: [
                    'modules/customscharges/lclcharges/controller'
                ]
                ,authenticate: true
            }
            ,'/customscharges/aircharges': {
                templateUrl: '/modules/customscharges/aircharges/view.html',
                dependencies: [
                    'modules/customscharges/aircharges/controller'
                ]
                ,authenticate: true
            }

            //Delivery
            ,'/delivery': {
                templateUrl: '/modules/delivery/view.html',
                dependencies: [
                    'modules/delivery/controller'
                ]
                ,authenticate: true
            }
        }
    };
});
