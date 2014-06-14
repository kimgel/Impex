'use strict';

define(['Dependency'], function(Dependency) {
    return {
        defaultStatePath: '/',
        states: {
            /* ======= Parents ======= */
            root: {
                name: 'root',
                abstract: true,
                template: '<ui-view/>',
                views: {
                    'header@': {
                        templateUrl: '/modules/common/header/main.html'
                    },
                    'navigation@': {
                        templateUrl: '/modules/common/sidenav/main.html'
                    }
                },
                resolve: new Dependency([
                    'modules/common/header/main',
                    'modules/directives/navigation'
                ])
            },
            settings: {
                name: 'settings',
                abstract: true,
                template: '<ui-view/>',
                views: {
                    'header@': {
                        templateUrl: '/modules/common/header/main.html'
                    },
                    'navigation@': {
                        templateUrl: '/modules/common/sidenav/settings.html'
                    }
                },
                resolve: new Dependency([
                    'modules/common/header/main'
                ])
            },
            /* ======= Login ======= */
            login: {
                name: 'login',
                url: '/login',
                parent: '',
                views: {
                    '@': {
                        templateUrl: '/modules/login/index.html'
                    }
                },
                resolve: new Dependency([
                    'modules/login/index'
                ]),
                authenticate: false
            },
            /* ======= 404 ======= */
            four_o_four: {
                name: 'fourofour',
                url: '/404',
                parent: '',
                views: {
                    '@': {
                        templateUrl: '/modules/common/404/404.html'
                    }
                },
                authenticate: false
            },
            /* ======= Statusboard ======= */
            statusboard: {
                name: 'statusboard',
                url: '/',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/statusboard/index.html'
                    }
                },
                data: {
                    displayName: 'Status Board'
                },
                resolve: new Dependency([
                    'modules/statusboard/index'
                ]),
                authenticate: true
            },
            /* ======= Settings: Main ======= */
            settings_home: {
                name: 'settings_home',
                url: '/settings/home',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/settings/index.html'
                    }
                },
                data: {
                    displayName: 'Settings'
                },
                resolve: new Dependency([
                    'modules/settings/index'
                ]),
                authenticate: true
            },
            /* ======= Settings: Regulatory Documents ======= */
            settings_regulatory_docs: {
                name: 'settings_regulatory_docs',
                url: '/settings/regulatory-documents',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/regulatorydocuments/list.html'
                    }
                },
                data: {
                    displayName: 'Regulatory Documents'
                },
                resolve: new Dependency([
                    'modules/regulatorydocuments/list'
                ]),
                authenticate: true
            },
            settings_regulatory_docs_add: {
                name: 'settings_regulatory_docs_add',
                url: '/add',
                parent: 'settings_regulatory_docs',
                views: {
                    '@': {
                        templateUrl: '/modules/regulatorydocuments/add.html'
                    }
                },
                data: {
                    displayName: 'Add Regulatory Document'
                },
                resolve: new Dependency([
                    'modules/regulatorydocuments/add'
                ]),
                authenticate: true
            },
            settings_regulatory_docs_view: {
                name: 'settings_regulatory_docs_view',
                url: '/:regulatoryDocumentId',
                parent: 'settings_regulatory_docs',
                views: {
                    '@': {
                        templateUrl: '/modules/regulatorydocuments/view.html'
                    }
                },
                data: {
                    displayName: 'View Regulatory Document'
                },
                resolve: new Dependency([
                    'modules/regulatorydocuments/view'
                ]),
                authenticate: true
            },
            settings_regulatory_docs_edit: {
                name: 'settings_regulatory_docs_edit',
                url: '/:regulatoryDocumentId/edit',
                parent: 'settings_regulatory_docs',
                views: {
                    '@': {
                        templateUrl: '/modules/regulatorydocuments/edit.html'
                    }
                },
                data: {
                    displayName: 'Edit Regulatory Document'
                },
                resolve: new Dependency([
                    'modules/regulatorydocuments/edit'
                ]),
                authenticate: true
            },

            /* ======= Settings: Materials ======= */
            settings_materials: {
                name: 'settings_materials',
                url: '/settings/materials',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/materials/list.html'
                    }
                },
                data: {
                    displayName: 'Materials'
                },
                resolve: new Dependency([
                    'modules/materials/list'
                ]),
                authenticate: true
            },
            settings_materials_add: {
                name: 'settings_materials_add',
                url: '/add',
                parent: 'settings_materials',
                views: {
                    '@': {
                        templateUrl: '/modules/materials/add.html'
                    }
                },
                data: {
                    displayName: 'Add Material'
                },
                resolve: new Dependency([
                    'modules/materials/add'
                ]),
                authenticate: true
            },
            settings_materials_view: {
                name: 'settings_materials_view',
                url: '/:materialId',
                parent: 'settings_materials',
                views: {
                    '@': {
                        templateUrl: '/modules/materials/view.html'
                    }
                },
                data: {
                    displayName: 'View Material'
                },
                resolve: new Dependency([
                    'modules/materials/view'
                ]),
                authenticate: true
            },
            settings_materials_edit: {
                name: 'settings_materials_edit',
                url: '/:materialId/edit',
                parent: 'settings_materials',
                views: {
                    '@': {
                        templateUrl: '/modules/materials/edit.html'
                    }
                },
                data: {
                    displayName: 'Edit Material'
                },
                resolve: new Dependency([
                    'modules/materials/edit'
                ]),
                authenticate: true
            },
            /* ======= Settings: Broker======= */
            settings_broker: {
                name: 'settings_broker',
                url: '/settings/brokers',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/broker/list.html'
                    }
                },
                data: {
                    displayName: 'Brokers'
                },
                resolve: new Dependency([
                    'modules/broker/list'
                ]),
                authenticate: true
            },
            settings_broker_add: {
                name: 'settings_broker_add',
                url: '/add',
                parent: 'settings_broker',
                views: {
                    '@': {
                        templateUrl: '/modules/broker/add.html'
                    }
                },
                data: {
                    displayName: 'Add Broker'
                },
                resolve: new Dependency([
                    'modules/broker/add'
                ]),
                authenticate: true
            },
            settings_broker_view: {
                name: 'settings_broker_view',
                url: '/:brokerId',
                parent: 'settings_broker',
                views: {
                    '@': {
                        templateUrl: '/modules/broker/view.html'
                    }
                },
                data: {
                    displayName: 'View Broker'
                },
                resolve: new Dependency([
                    'modules/broker/view'
                ]),
                authenticate: true
            },
            settings_broker_edit: {
                name: 'settings_broker_edit',
                url: '/:brokerId/edit',
                parent: 'settings_broker',
                views: {
                    '@': {
                        templateUrl: '/modules/broker/edit.html'
                    }
                },
                data: {
                    displayName: 'Edit Broker'
                },
                resolve: new Dependency([
                    'modules/broker/edit'
                ]),
                authenticate: true
            },

            /* ======= Settings: Suppliers ======= */
            settings_supplier: {
                name: 'settings_supplier',
                url: '/settings/suppliers',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/supplier/list.html'
                    }
                },
                data: {
                    displayName: 'Suppliers'
                },
                resolve: new Dependency([
                    'modules/supplier/list'
                ]),
                authenticate: true
            },
            settings_supplier_add: {
                name: 'settings_supplier_add',
                url: '/add',
                parent: 'settings_supplier',
                views: {
                    '@': {
                        templateUrl: '/modules/supplier/add.html'
                    }
                },
                data: {
                    displayName: 'Add Supplier'
                },
                resolve: new Dependency([
                    'modules/supplier/add'
                ]),
                authenticate: true
            },
            settings_supplier_view: {
                name: 'settings_supplier_view',
                url: '/:supplierId',
                parent: 'settings_supplier',
                views: {
                    '@': {
                        templateUrl: '/modules/supplier/view.html'
                    }
                },
                data: {
                    displayName: 'View Supplier'
                },
                resolve: new Dependency([
                    'modules/supplier/view'
                ]),
                authenticate: true
            },
            settings_supplier_edit: {
                name: 'settings_supplier_edit',
                url: '/:supplierId/edit',
                parent: 'settings_supplier',
                views: {
                    '@': {
                        templateUrl: '/modules/supplier/edit.html'
                    }
                },
                data: {
                    displayName: 'Edit Supplier'
                },
                resolve: new Dependency([
                    'modules/supplier/edit'
                ]),
                authenticate: true
            },
            /* ======= Settings: Forwarder ======= */
            settings_forwarder: {
                name: 'settings_forwarder',
                url: '/settings/forwarders',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/forwarder/list.html'
                    }
                },
                data: {
                    displayName: 'Forwarders'
                },
                resolve: new Dependency([
                    'modules/forwarder/list'
                ]),
                authenticate: true
            },
            settings_forwarder_add: {
                name: 'settings_forwarder_add',
                url: '/add',
                parent: 'settings_forwarder',
                views: {
                    '@': {
                        templateUrl: '/modules/forwarder/add.html'
                    }
                },
                data: {
                    displayName: 'Add Forwarder'
                },
                resolve: new Dependency([
                    'modules/forwarder/add'
                ]),
                authenticate: true
            },
            settings_forwarder_view: {
                name: 'settings_forwarder_view',
                url: '/:forwarderId',
                parent: 'settings_forwarder',
                views: {
                    '@': {
                        templateUrl: '/modules/forwarder/view.html'
                    }
                },
                data: {
                    displayName: 'View Forwarder'
                },
                resolve: new Dependency([
                    'modules/forwarder/view'
                ]),
                authenticate: true
            },
            settings_forwarder_edit: {
                name: 'settings_forwarder_edit',
                url: '/:forwarderId/edit',
                parent: 'settings_forwarder',
                views: {
                    '@': {
                        templateUrl: '/modules/forwarder/edit.html'
                    }
                },
                data: {
                    displayName: 'Edit Forwarder'
                },
                resolve: new Dependency([
                    'modules/forwarder/edit'
                ]),
                authenticate: true
            },
            /* ======= Settings: Shipping Lines ======= */
            settings_shippinglines: {
                name: 'settings_shippinglines',
                url: '/settings/shipping-lines',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/shippinglines/list.html'
                    }
                },
                data: {
                    displayName: 'Shipping Lines'
                },
                resolve: new Dependency([
                    'modules/shippinglines/list'
                ]),
                authenticate: true
            },
            settings_shippinglines_add: {
                name: 'settings_shippinglines_add',
                url: '/add',
                parent: 'settings_shippinglines',
                views: {
                    '@': {
                        templateUrl: '/modules/shippinglines/add.html'
                    }
                },
                data: {
                    displayName: 'Add Shipping Line'
                },
                resolve: new Dependency([
                    'modules/shippinglines/add'
                ]),
                authenticate: true
            },
            settings_shippinglines_view: {
                name: 'settings_shippinglines_view',
                url: '/:shippinglineId',
                parent: 'settings_shippinglines',
                views: {
                    '@': {
                        templateUrl: '/modules/shippinglines/view.html'
                    }
                },
                data: {
                    displayName: 'View Shipping Line'
                },
                resolve: new Dependency([
                    'modules/shippinglines/view'
                ]),
                authenticate: true
            },
            settings_shippinglines_edit: {
                name: 'settings_shippinglines_edit',
                url: '/:shippinglineId/edit',
                parent: 'settings_shippinglines',
                views: {
                    '@': {
                        templateUrl: '/modules/shippinglines/edit.html'
                    }
                },
                data: {
                    displayName: 'Edit Shipping Line'
                },
                resolve: new Dependency([
                    'modules/shippinglines/edit'
                ]),
                authenticate: true
            },
            /* ======= Settings: User ======= */
            settings_user: {
                name: 'settings_user',
                url: '/settings/users',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/user/list.html'
                    }
                },
                data: {
                    displayName: 'Users'
                },
                resolve: new Dependency([
                    'modules/user/list'
                ]),
                authenticate: true
            },
            settings_user_add: {
                name: 'settings_user_add',
                url: '/add',
                parent: 'settings_user',
                views: {
                    '@': {
                        templateUrl: '/modules/user/add.html'
                    }
                },
                data: {
                    displayName: 'Add User'
                },
                resolve: new Dependency([
                    'modules/user/add'
                ]),
                authenticate: true
            },
            settings_user_view: {
                name: 'settings_user_view',
                url: '/:userId',
                parent: 'settings_user',
                views: {
                    '@': {
                        templateUrl: '/modules/user/view.html'
                    }
                },
                data: {
                    displayName: 'View User'
                },
                resolve: new Dependency([
                    'modules/user/view'
                ]),
                authenticate: true
            },
            settings_user_edit: {
                name: 'settings_user_edit',
                url: '/:userId/edit',
                parent: 'settings_user',
                views: {
                    '@': {
                        templateUrl: '/modules/user/edit.html'
                    }
                },
                data: {
                    displayName: 'Edit User'
                },
                resolve: new Dependency([
                    'modules/user/edit'
                ]),
                authenticate: true
            },

            /* ======= Settings: Duties and Taxes======= */
            settings_duties_taxes: {
                name: 'settings_duties_taxes',
                url: '/settings/duties-and-taxes',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/dutiestaxes/list.html'
                    }
                },
                data: {
                    displayName: 'Duties and Taxes'
                },
                authenticate: true
            },
            settings_duties_taxes_add: {
                name: 'settings_duties_taxes_add',
                url: '/add',
                parent: 'settings_duties_taxes',
                views: {
                    '@': {
                        templateUrl: '/modules/dutiestaxes/add.html'
                    }
                },
                data: {
                    displayName: 'Add Duties and Taxes'
                },
                authenticate: true
            },
            settings_duties_taxes_view: {
                name: 'settings_duties_taxes_view',
                url: '/view',
                parent: 'settings_duties_taxes',
                views: {
                    '@': {
                        templateUrl: '/modules/dutiestaxes/view.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                authenticate: true
            },
            settings_duties_taxes_edit: {
                name: 'settings_duties_taxes_edit',
                url: '/edit',
                parent: 'settings_duties_taxes',
                views: {
                    '@': {
                        templateUrl: '/modules/dutiestaxes/edit.html'
                    }
                },
                data: {
                    displayName: 'Edit'
                },
                authenticate: true
            },

            /* ======= Initiate Import: Planner ======= */
            initiateimport_planner: {
                name: 'initiateimport_planner',
                url: '/initiate-import/planner',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateimport/planner/list.html'
                    }
                },
                data: {
                    displayName: 'Planner'
                },
                resolve: new Dependency([
                    'modules/initiateimport/planner/list'
                ]),
                authenticate: true
            },            
            initiateimport_planner_add: {
                name: 'initiateimport_planner_add',
                url: '/add',
                parent: 'initiateimport_planner',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateimport/planner/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                resolve: new Dependency([
                    'modules/initiateimport/planner/add'
                ]),
                authenticate: true
            },
            initiateimport_planner_view: {
                name: 'initiateimport_planner_view',
                url: '/:plannerId',
                parent: 'initiateimport_planner',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateimport/planner/view.html'
                    }
                },
                data: {
                    displayName: 'View'
                },
                resolve: new Dependency([
                    'modules/initiateimport/planner/view'
                ]),
                authenticate: true
            },
            /* ======= Initiate Import: Broker ======= */
            initiateimport_broker: {
                name: 'initiateimport_broker',
                url: '/initiate-import/broker',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateimport/broker/list.html'
                    }
                },
                data: {
                    displayName: 'Broker'
                },
                resolve: new Dependency([
                    'modules/initiateimport/broker/list'
                ]),
                authenticate: true
            },
            initiateimport_broker_add: {
                name: 'initiateimport_broker_add',
                url: '/add',
                parent: 'initiateimport_broker',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateimport/broker/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                resolve: new Dependency([
                    'modules/initiateimport/broker/add'
                ]),
                authenticate: true
            },
            /* ======= Initiate Import: Shipping Line / Forwarder ======= */
            initiateimport_shippingforwarder: {
                name: 'initiateimport_shippingforwarder',
                url: '/initiate-import/shipping-forwarder',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateimport/shippingforwarder/list.html'
                    }
                },
                data: {
                    displayName: 'Shipping Line / Forwarder'
                },
                resolve: new Dependency([
                    'modules/initiateimport/shippingforwarder/list'
                ]),
                authenticate: true
            },
            initiateimport_assignforwarder_add: {
                name: 'initiateimport_shippingforwarder_add',
                url: '/add',
                parent: 'initiateimport_shippingforwarder',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateimport/shippingforwarder/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                resolve: new Dependency([
                    'modules/initiateimport/shippingforwarder/add'
                ]),
                authenticate: true
            },
            /* ======= Shipment Detail ======= */
            shipmentdetail: {
                name: 'shipmentdetail',
                url: '/prepare-shipment/shipment-detail',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/shipmentdetail/list.html'
                    }
                },
                data: {
                    displayName: 'Shipment Detail'
                },
                resolve: new Dependency([
                    'modules/shipmentdetail/list'
                ]),
                authenticate: true
            },
            shipmentdetail_add: {
                name: 'shipmentdetail_add',
                url: '/add',
                parent: 'shipmentdetail',
                views: {
                    '@': {
                        templateUrl: '/modules/shipmentdetail/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                resolve: new Dependency([
                    'modules/shipmentdetail/add'
                ]),
                authenticate: true
            },
            /* ======= Shipment Departure ======= */
            shipmentdeparture: {
                name: 'shipmentdeparture',
                url: '/prepare-shipment/shipment-departure',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/shipmentdeparture/list.html'
                    }
                },
                data: {
                    displayName: 'Shipment Departure'
                },
                resolve: new Dependency([
                    'modules/shipmentdeparture/list'
                ]),
                authenticate: true
            },
            shipmentdeparture_add: {
                name: 'shipmentdeparture_add',
                url: '/add',
                parent: 'shipmentdeparture',
                views: {
                    '@': {
                        templateUrl: '/modules/shipmentdeparture/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                resolve: new Dependency([
                    'modules/shipmentdeparture/add'
                ]),
                authenticate: true
            },
            /* ======= Foreign Invoice ======= */
            foreigninvoice: {
                name: 'foreigninvoice',
                url: '/foreign-invoice',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/foreigninvoice/list.html'
                    }
                },
                data: {
                    displayName: 'Foreign Invoice'
                },
                resolve: new Dependency([
                    'modules/foreigninvoice/list'
                ]),
                authenticate: true
            },
            foreigninvoice_add: {
                name: 'foreigninvoice_add',
                url: '/add',
                parent: 'foreigninvoice',
                views: {
                    '@': {
                        templateUrl: '/modules/foreigninvoice/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                resolve: new Dependency([
                    'modules/foreigninvoice/add'
                ]),
                authenticate: true
            },
            /* ======= Customs Clearance ======= */
            customsclearance: {
                name: 'customsclearance',
                url: '/customs-clearance',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/customsclearance/list.html'
                    }
                },
                data: {
                    displayName: 'Customs Clearance'
                },
                resolve: new Dependency([
                    'modules/customsclearance/list'
                ]),
                authenticate: true
            },
            customsclearance_add: {
                name: 'customsclearance_add',
                url: '/add',
                parent: 'customsclearance',
                views: {
                    '@': {
                        templateUrl: '/modules/customsclearance/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                resolve: new Dependency([
                    'modules/customsclearance/add'
                ]),
                authenticate: true
            },
            /* ======= Delivery ======= */
            delivery: {
                name: 'delivery',
                url: '/delivery',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/delivery/list.html'
                    }
                },
                data: {
                    displayName: 'Delivery'
                },
                resolve: new Dependency([
                    'modules/delivery/list'
                ]),
                authenticate: true
            },
            delivery_add: {
                name: 'delivery_add',
                url: '/add',
                parent: 'delivery',
                views: {
                    '@': {
                        templateUrl: '/modules/delivery/add.html'
                    }
                },
                data: {
                    displayName: 'Add'
                },
                resolve: new Dependency([
                    'modules/delivery/add'
                ]),
                authenticate: true
            },
            /* ======= Custom Charges ======= */
            customscharges_aircharges_add: {
                name: 'customscharges_aircharges_add',
                url: '/customscharges/aircharges',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/customscharges/aircharges/add.html'
                    }
                },
                resolve: new Dependency([
                    'modules/customscharges/aircharges/add'
                ]),
                authenticate: true
            },
            customscharges_lclcharges_add: {
                name: 'customscharges_lclcharges_add',
                url: '/customscharges/lclcharges',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/customscharges/lclcharges/add.html'
                    }
                },
                resolve: new Dependency([
                    'modules/customscharges/lclcharges/add'
                ]),
                authenticate: true
            },
            customscharges_fclcharges_add: {
                name: 'customscharges_fclcharges_add',
                url: '/customscharges/fclcharges',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/customscharges/fclcharges/add.html'
                    }
                },
                resolve: new Dependency([
                    'modules/customscharges/fclcharges/add'
                ]),
                authenticate: true
            }
        }
    };
});
