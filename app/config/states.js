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
            administration: {
                name: 'administration',
                abstract: true,
                template: '<ui-view/>',
                views: {
                    'header@': {
                        templateUrl: '/modules/common/header/main.html'
                    },
                    'navigation@': {
                        templateUrl: '/modules/common/sidenav/administration.html'
                    }
                },
                resolve: new Dependency([
                    'modules/common/header/main'
                ])
            },
            blank: {
                name: 'blank',
                abstract: true,
                template: '<ui-view/>',
                views: {
                    'header@': {
                        templateUrl: '/modules/common/header/blank.html'
                    },
                    'navigation@': {
                        templateUrl: '/modules/common/sidenav/blank.html'
                    }
                }
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
            /* ======= administration: Main ======= */
            administration_home: {
                name: 'administration_home',
                url: '/administration',
                parent: 'administration',
                views: {
                    '@': {
                        templateUrl: '/modules/administration/index.html'
                    }
                },
                data: {
                    displayName: 'Administration'
                },
                resolve: new Dependency([
                    'modules/administration/index'
                ]),
                authenticate: true
            },
            /* ======= administration: Regulatory Documents ======= */
            administration_regulatory_docs: {
                name: 'administration_regulatory_docs',
                url: '/administration/regulatory-documents',
                parent: 'administration',
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
            administration_regulatory_docs_add: {
                name: 'administration_regulatory_docs_add',
                url: '/add',
                parent: 'administration_regulatory_docs',
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
            administration_regulatory_docs_view: {
                name: 'administration_regulatory_docs_view',
                url: '/:regulatoryDocumentId',
                parent: 'administration_regulatory_docs',
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
            administration_regulatory_docs_edit: {
                name: 'administration_regulatory_docs_edit',
                url: '/:regulatoryDocumentId/edit',
                parent: 'administration_regulatory_docs',
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

            /* ======= administration: Materials ======= */
            administration_materials: {
                name: 'administration_materials',
                url: '/administration/materials',
                parent: 'administration',
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
            administration_materials_add: {
                name: 'administration_materials_add',
                url: '/add',
                parent: 'administration_materials',
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
            administration_materials_view: {
                name: 'administration_materials_view',
                url: '/:materialId',
                parent: 'administration_materials',
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
            administration_materials_edit: {
                name: 'administration_materials_edit',
                url: '/:materialId/edit',
                parent: 'administration_materials',
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
            /* ======= administration: Broker======= */
            administration_broker: {
                name: 'administration_broker',
                url: '/administration/brokers',
                parent: 'administration',
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
            administration_broker_add: {
                name: 'administration_broker_add',
                url: '/add',
                parent: 'administration_broker',
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
            administration_broker_view: {
                name: 'administration_broker_view',
                url: '/:brokerId',
                parent: 'administration_broker',
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
            administration_broker_edit: {
                name: 'administration_broker_edit',
                url: '/:brokerId/edit',
                parent: 'administration_broker',
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

            /* ======= administration: Suppliers ======= */
            administration_supplier: {
                name: 'administration_supplier',
                url: '/administration/suppliers',
                parent: 'administration',
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
            administration_supplier_add: {
                name: 'administration_supplier_add',
                url: '/add',
                parent: 'administration_supplier',
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
            administration_supplier_view: {
                name: 'administration_supplier_view',
                url: '/:supplierId',
                parent: 'administration_supplier',
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
            administration_supplier_edit: {
                name: 'administration_supplier_edit',
                url: '/:supplierId/edit',
                parent: 'administration_supplier',
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
            /* ======= administration: Forwarder ======= */
            administration_forwarder: {
                name: 'administration_forwarder',
                url: '/administration/forwarders',
                parent: 'administration',
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
            administration_forwarder_add: {
                name: 'administration_forwarder_add',
                url: '/add',
                parent: 'administration_forwarder',
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
            administration_forwarder_view: {
                name: 'administration_forwarder_view',
                url: '/:forwarderId',
                parent: 'administration_forwarder',
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
            administration_forwarder_edit: {
                name: 'administration_forwarder_edit',
                url: '/:forwarderId/edit',
                parent: 'administration_forwarder',
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
            /* ======= administration: Shipping Lines ======= */
            administration_shippinglines: {
                name: 'administration_shippinglines',
                url: '/administration/shipping-lines',
                parent: 'administration',
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
            administration_shippinglines_add: {
                name: 'administration_shippinglines_add',
                url: '/add',
                parent: 'administration_shippinglines',
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
            administration_shippinglines_view: {
                name: 'administration_shippinglines_view',
                url: '/:shippinglineId',
                parent: 'administration_shippinglines',
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
            administration_shippinglines_edit: {
                name: 'administration_shippinglines_edit',
                url: '/:shippinglineId/edit',
                parent: 'administration_shippinglines',
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
            /* ======= administration: Warehouse ======= */
            administration_warehouse: {
                name: 'administration_warehouse',
                url: '/administration/warehouses',
                parent: 'administration',
                views: {
                    '@': {
                        templateUrl: '/modules/warehouse/list.html'
                    }
                },
                data: {
                    displayName: 'Warehouses'
                },
                resolve: new Dependency([
                    'modules/warehouse/list'
                ]),
                authenticate: true
            },
            administration_warehouse_add: {
                name: 'administration_warehouse_add',
                url: '/add',
                parent: 'administration_warehouse',
                views: {
                    '@': {
                        templateUrl: '/modules/warehouse/add.html'
                    }
                },
                data: {
                    displayName: 'Add Warehouse'
                },
                resolve: new Dependency([
                    'modules/warehouse/add'
                ]),
                authenticate: true
            },
            administration_warehouse_view: {
                name: 'administration_warehouse_view',
                url: '/:warehouseId',
                parent: 'administration_warehouse',
                views: {
                    '@': {
                        templateUrl: '/modules/warehouse/view.html'
                    }
                },
                data: {
                    displayName: 'View Warehouse'
                },
                resolve: new Dependency([
                    'modules/warehouse/view'
                ]),
                authenticate: true
            },
            administration_warehouse_edit: {
                name: 'administration_warehouse_edit',
                url: '/:warehouseId/edit',
                parent: 'administration_warehouse',
                views: {
                    '@': {
                        templateUrl: '/modules/warehouse/edit.html'
                    }
                },
                data: {
                    displayName: 'Edit Warehouse'
                },
                resolve: new Dependency([
                    'modules/warehouse/edit'
                ]),
                authenticate: true
            },
            /* ======= administration: User ======= */
            administration_user: {
                name: 'administration_user',
                url: '/administration/users',
                parent: 'administration',
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
            administration_user_add: {
                name: 'administration_user_add',
                url: '/add',
                parent: 'administration_user',
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
            administration_user_view: {
                name: 'administration_user_view',
                url: '/:userId',
                parent: 'administration_user',
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
            administration_user_edit: {
                name: 'administration_user_edit',
                url: '/:userId/edit',
                parent: 'administration_user',
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

            /* ======= administration: Duties and Taxes======= */
            administration_duties_taxes: {
                name: 'administration_duties_taxes',
                url: '/administration/duties-and-taxes',
                parent: 'administration',
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
            administration_duties_taxes_add: {
                name: 'administration_duties_taxes_add',
                url: '/add',
                parent: 'administration_duties_taxes',
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
            administration_duties_taxes_view: {
                name: 'administration_duties_taxes_view',
                url: '/view',
                parent: 'administration_duties_taxes',
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
            administration_duties_taxes_edit: {
                name: 'administration_duties_taxes_edit',
                url: '/edit',
                parent: 'administration_duties_taxes',
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
            },
            tools: {
                name: 'tools',
                url: '/tools',
                parent: 'blank',
                views: {
                    '@': {
                        templateUrl: '/modules/tools/index.html'
                    }
                },
                resolve: new Dependency([
                    'modules/tools/index'
                ])
            }
        }
    };
});
