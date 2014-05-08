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

            ,'/': {
                templateUrl: '/modules/statusboard/index.html',
                dependencies: [
                    'modules/statusboard/index'
                ]
                ,authenticate: true            
            }


/* Settings Item
=================================================================== */     
            ,'/settings/item': {
                templateUrl: '/modules/item/list.html',
                dependencies: [
                    'modules/item/list'
                ]
                ,authenticate: true
            }
            ,'/settings/item/add': {
                templateUrl: '/modules/item/add.html',
                dependencies: [
                    'modules/item/add'
                ]
                ,authenticate: true
            }
            ,'/settings/item/:itemId': {
                templateUrl: '/modules/item/view.html',
                dependencies: [
                    'modules/item/view'
                ]
                ,authenticate: true
            },
            '/settings/item/:itemId/edit': {
                templateUrl: '/modules/settings/item/edit.html',
                dependencies: [
                    'modules/item/edit'
                ]
                ,authenticate: true
            }

/* Settings Broker
=================================================================== */           
            ,'/settings/broker': {
                templateUrl: '/modules/broker/list.html',
                dependencies: [
                    'modules/broker/list'
                ]
                ,authenticate: true
            }
            ,'/settings/broker/add': {
                templateUrl: '/modules/broker/add.html',
                dependencies: [
                    'modules/broker/add'
                ]
                ,authenticate: true
            }
            ,'/settings/broker/:brokerId': {
                templateUrl: '/modules/broker/view.html',
                dependencies: [
                    'modules/broker/view'
                ]
                ,authenticate: true
            },
            '/settings/broker/:brokerId/edit': {
                templateUrl: '/modules/broker/edit.html',
                dependencies: [
                    'modules/broker/edit'
                ]
                ,authenticate: true
            }

/* Settings Supplier
=================================================================== */         
            ,'/settings/supplier': {
                templateUrl: '/modules/supplier/list.html',
                dependencies: [                    
                    'modules/supplier/list'
                ]
                ,authenticate: true
            }
            ,'/settings/supplier/add': {
                templateUrl: '/modules/supplier/add.html',
                dependencies: [
                    'modules/supplier/add'
                ]
                ,authenticate: true
            }
            ,'/settings/supplier/:supplierId': {
                templateUrl: '/modules/supplier/view.html',
                dependencies: [
                    'modules/supplier/view'
                ]
                ,authenticate: true
            },
            '/settings/supplier/:supplierId/edit': {
                templateUrl: '/modules/supplier/edit.html',
                dependencies: [
                    'modules/supplier/edit'
                ]
                ,authenticate: true
            }


/* Settings Forwarder
=================================================================== */        
            ,'/settings/forwarder': {
                templateUrl: '/modules/forwarder/list.html',
                dependencies: [                    
                    'modules/forwarder/list'
                ]
                ,authenticate: true
            }
            ,'/settings/forwarder/add': {
                templateUrl: '/modules/forwarder/add.html',
                dependencies: [
                    'modules/forwarder/add'
                ]
                ,authenticate: true
            }
            ,'/settings/forwarder/:forwarderId': {
                templateUrl: '/modules/forwarder/view.html',
                dependencies: [
                    'modules/forwarder/view'
                ]
                ,authenticate: true
            },
            '/settings/forwarder/:forwarderId/edit': {
                templateUrl: '/modules/forwarder/edit.html',
                dependencies: [
                    'modules/forwarder/edit'
                ]
                ,authenticate: true
            }

/* Settings User
=================================================================== */        
            ,'/settings/user': {
                templateUrl: '/modules/user/list.html',
                dependencies: [                    
                    'modules/user/list'
                ]
                ,authenticate: true
            }
            ,'/settings/user/add': {
                templateUrl: '/modules/user/add.html',
                dependencies: [
                    'modules/user/add'
                ]
                ,authenticate: true
            }
            ,'/settings/user/:userId': {
                templateUrl: '/modules/user/view.html',
                dependencies: [
                    'modules/user/view'
                ]
                ,authenticate: true
            },
            '/settings/user/:userId/edit': {
                templateUrl: '/modules/user/edit.html',
                dependencies: [
                    'modules/user/edit'
                ]
                ,authenticate: true
            }
            

/* Initiate Import Planner
=================================================================== */
            ,'/initiateimport/planner': {
                templateUrl: '/modules/initiateimport/planner/list.html',
                dependencies: [
                    'modules/initiateimport/planner/list'
                ]
                ,authenticate: true
            }
            ,'/initiateimport/planner/add': {
                templateUrl: '/modules/initiateimport/planner/add.html',
                dependencies: [
                    'modules/initiateimport/planner/add'
                ]
                ,authenticate: true
            }
            
/* Initiate Import Broker
=================================================================== */
            ,'/initiateimport/broker': {
                templateUrl: '/modules/initiateimport/broker/list.html',
                dependencies: [
                    'modules/initiateimport/broker/list'
                ]
                ,authenticate: true
            }
            ,'/initiateimport/broker/add': {
                templateUrl: '/modules/initiateimport/broker/add.html',
                dependencies: [
                    'modules/initiateimport/broker/add'
                ]
                ,authenticate: true
            }

/* Assign Forwarder
=================================================================== */
            ,'/assignforwarder': {
                templateUrl: '/modules/assignforwarder/list.html',
                dependencies: [
                    'modules/assignforwarder/list'
                ]
                ,authenticate: true
            }
            ,'/assignforwarder/add': {
                templateUrl: '/modules/assignforwarder/add.html',
                dependencies: [
                    'modules/assignforwarder/add'
                ]
                ,authenticate: true
            }

/* Shipment Detail
=================================================================== */
            ,'/shipmentdetail': {
                templateUrl: '/modules/shipmentdetail/list.html',
                dependencies: [
                    'modules/shipmentdetail/list'
                ]
                ,authenticate: true
            }
            ,'/shipmentdetail/add': {
                templateUrl: '/modules/shipmentdetail/add.html',
                dependencies: [
                    'modules/shipmentdetail/add'
                ]
                ,authenticate: true
            }

/* Shipment Departure
=================================================================== */
            ,'/shipmentdeparture': {
                templateUrl: '/modules/shipmentdeparture/list.html',
                dependencies: [
                    'modules/shipmentdeparture/list'
                ]
                ,authenticate: true
            }
            ,'/shipmentdeparture/add': {
                templateUrl: '/modules/shipmentdeparture/add.html',
                dependencies: [
                    'modules/shipmentdeparture/add'
                ]
                ,authenticate: true
            }

/* Foreign Invoice
=================================================================== */
            ,'/foreigninvoice': {
                templateUrl: '/modules/foreigninvoice/list.html',
                dependencies: [
                    'modules/foreigninvoice/list'
                ]
                ,authenticate: true
            }
            ,'/foreigninvoice/add': {
                templateUrl: '/modules/foreigninvoice/add.html',
                dependencies: [
                    'modules/foreigninvoice/add'
                ]
                ,authenticate: true
            }

/* Customs Clearance
=================================================================== */
            ,'/customsclearance': {
                templateUrl: '/modules/customsclearance/list.html',
                dependencies: [
                    'modules/customsclearance/list'
                ]
                ,authenticate: true
            }
            ,'/customsclearance/add': {
                templateUrl: '/modules/customsclearance/add.html',
                dependencies: [
                    'modules/customsclearance/add'
                ]
                ,authenticate: true
            }

/* Delivery
=================================================================== */
            ,'/delivery': {
                templateUrl: '/modules/delivery/list.html',
                dependencies: [
                    'modules/delivery/list'
                ]
                ,authenticate: true
            }
            ,'/delivery/add': {
                templateUrl: '/modules/delivery/add.html',
                dependencies: [
                    'modules/delivery/add'
                ]
                ,authenticate: true
            }

/* Customs Charges
=================================================================== */
            ,'/customscharges/fclcharges': {
                templateUrl: '/modules/customscharges/fclcharges/add.html',
                dependencies: [
                    'modules/customscharges/fclcharges/add'
                ]
                ,authenticate: true
            }
            ,'/customscharges/lclcharges': {
                templateUrl: '/modules/customscharges/lclcharges/add.html',
                dependencies: [
                    'modules/customscharges/lclcharges/add'
                ]
                ,authenticate: true
            }
            ,'/customscharges/aircharges': {
                templateUrl: '/modules/customscharges/aircharges/add.html',
                dependencies: [
                    'modules/customscharges/aircharges/add'
                ]
                ,authenticate: true
            }
        }
    };
});
