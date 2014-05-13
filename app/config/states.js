'use strict';

define(['Dependency'], function (Dependency) {
    return {
        defaultStatePath: '/login',
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
                    'modules/common/sidenav/main'
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
                    'modules/common/header/main',
                    'modules/common/sidenav/settings'
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
            /* ======= Statusboard ======= */
            statusboard: {
                name: 'statusboard',
                url: '/statusboard',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/statusboard/index.html'
                    }
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
                resolve: new Dependency([
                    'modules/settings/index'
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
                resolve: new Dependency([
                    'modules/materials/list'
                ]),
                authenticate: true
            },
            settings_materials_add: {
                name: 'settings_materials_add',
                url: '/settings/materials/add',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/materials/add.html'
                    }
                },
                resolve: new Dependency([
                    'modules/materials/add'
                ]),
                authenticate: true
            },
            settings_materials_view: {
                name: 'settings_materials_view',
                url: '/settings/materials/:materialId',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/materials/view.html'
                    }
                },
                resolve: new Dependency([
                    'modules/materials/view'
                ]),
                authenticate: true
            },
            settings_materials_edit: {
                name: 'settings_materials_edit',
                url: '/settings/materials/:materialId/edit',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/materials/edit.html'
                    }
                },
                resolve: new Dependency([
                    'modules/materials/edit'
                ]),
                authenticate: true
            },
            /* ======= Settings: Broker======= */
            settings_master_broker: {
                name: 'settings_master_broker',
                url: '/settings/master/broker',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/broker/list.html'
                    }
                },
                resolve: new Dependency([
                    'modules/broker/list'
                ]),
                authenticate: true
            },
            settings_master_broker_add: {
                name: 'settings_master_broker_add',
                url: '/settings/master/broker/add',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/broker/add.html'
                    }
                },
                resolve: new Dependency([
                    'modules/broker/add'
                ]),
                authenticate: true
            },
            settings_master_broker_view: {
                name: 'settings_master_broker_view',
                url: '/settings/master/broker/:brokerId',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/broker/view.html'
                    }
                },
                resolve: new Dependency([
                    'modules/broker/view'
                ]),
                authenticate: true
            },
            settings_master_broker_edit: {
                name: 'settings_master_broker_edit',
                url: '/settings/master/broker/:brokerId/edit',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/broker/edit.html'
                    }
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
                resolve: new Dependency([
                    'modules/supplier/list'
                ]),
                authenticate: true
            },
            settings_supplier_add: {
                name: 'settings_supplier_add',
                url: '/settings/suppliers/add',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/supplier/add.html'
                    }
                },
                resolve: new Dependency([
                    'modules/supplier/add'
                ]),
                authenticate: true
            },
            settings_supplier_view: {
                name: 'settings_supplier_view',
                url: '/settings/suppliers/:supplierId',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/supplier/view.html'
                    }
                },
                resolve: new Dependency([
                    'modules/supplier/view'
                ]),
                authenticate: true
            },
            settings_supplier_edit: {
                name: 'settings_supplier_edit',
                url: '/settings/suppliers/:supplierId/edit',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/supplier/edit.html'
                    }
                },
                resolve: new Dependency([
                    'modules/supplier/edit'
                ]),
                authenticate: true
            },
            /* ======= Settings: Forwarder ======= */
            settings_master_forwarder: {
                name: 'settings_master_forwarder',
                url: '/settings/master/forwarder',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/forwarder/list.html'
                    }
                },
                resolve: new Dependency([
                   'modules/forwarder/list'
                ]),
                authenticate: true
            },
            settings_master_forwarder_add: {
                name: 'settings_master_forwarder_add',
                url: '/settings/master/forwarder/add',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/forwarder/add.html'
                    }
                },
                resolve: new Dependency([
                   'modules/forwarder/add'
                ]),
                authenticate: true
            },
            settings_master_forwarder_view: {
                name: 'settings_master_forwarder_view',
                url: '/settings/master/forwarder/:forwarderId',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/forwarder/view.html'
                    }
                },
                resolve: new Dependency([
                   'modules/forwarder/view'
               ]),
                authenticate: true
            },
            settings_master_forwarder_edit: {
                name: 'settings_master_forwarder_edit',
                url: '/settings/master/forwarder/:forwarderId/edit',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/forwarder/edit.html'
                    }
                },
                resolve: new Dependency([
                   'modules/forwarder/edit'
                ]),
                authenticate: true
            },
            /* ======= Settings: User ======= */
            settings_user: {
                name: 'settings_user',
                url: '/settings/user',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/user/list.html'
                    }
                },
                resolve: new Dependency([
                   'modules/user/list'
                ]),
                authenticate: true
            },
            settings_user_add: {
                name: 'settings_user_add',
                url: '/settings/user/add',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/user/add.html'
                    }
                },
                resolve: new Dependency([
                   'modules/user/add'
                ]),
                authenticate: true
            },
            settings_user_view: {
                name: 'settings_user_view',
                url: '/settings/user/:userId',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/user/view.html'
                    }
                },
                resolve: new Dependency([
                   'modules/user/view'
                ]),
                authenticate: true
            },
            settings_user_edit: {
                name: 'settings_user_edit',
                url: '/settings/user/:userId/edit',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/user/edit.html'
                    }
                },
                resolve: new Dependency([
                   'modules/user/edit'
                ]),
                authenticate: true
            },
            /* ======= Initiate Import: Planner ======= */
            initiate_import_planner: {
                name: 'initiate_import_planner',
                url: '/initiateimport/planner',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateimport/planner/list.html'
                    }
                },
                resolve: new Dependency([
                   'modules/initiateimport/planner/list'
                ]),
                authenticate: true
            },
            initiate_import_planner_add: {
                name: 'initiate_import_planner_add',
                url: '/initiateimport/planner/add',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateimport/planner/add.html'
                    }
                },
                resolve: new Dependency([
                   'modules/initiateimport/planner/add'
                ]),
                authenticate: true
            },
            /* ======= Initiate Import: Broker ======= */
            initiate_import_broker: {
                name: 'initiate_import_broker',
                url: '/initiateimport/broker',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateimport/broker/list.html'
                    }
                },
                resolve: new Dependency([
                   'modules/initiateimport/broker/list'
                ]),
                authenticate: true
            },
            initiate_import_broker_add: {
                name: 'initiate_import_broker_add',
                url: '/initiateimport/broker/add',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateimport/broker/add.html'
                    }
                },
                resolve: new Dependency([
                   'modules/initiateimport/broker/add'
                ]),
                authenticate: true
            },
            /* ======= Initiate Import: Assign Forwarder ======= */
            initiate_import_assignforwarder: {
                name: 'initiate_import_assignforwarder',
                url: '/initiateimport/assignforwarder',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateimport/assignforwarder/list.html'
                    }
                },
                resolve: new Dependency([
                   'modules/initiateimport/assignforwarder/list'
                ]),
                authenticate: true
            },
            initiate_import_assignforwarder_add: {
                name: 'initiate_import_assignforwarder_add',
                url: '/initiateimport/assignforwarder/add',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/initiateimport/assignforwarder/add.html'
                    }
                },
                resolve: new Dependency([
                   'modules/initiateimport/assignforwarder/add'
                ]),
                authenticate: true
            },
            /* ======= Shipment Detail ======= */
            shipmentdetail: {
                name: 'shipmentdetail',
                url: '/shipmentdetail',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/shipmentdetail/list.html'
                    }
                },
                resolve: new Dependency([
                   'modules/shipmentdetail/list'
                ]),
                authenticate: true
            },
            shipmentdetail_add: {
                name: 'shipmentdetail_add',
                url: '/shipmentdetail/add',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/shipmentdetail/add.html'
                    }
                },
                resolve: new Dependency([
                   'modules/shipmentdetail/add'
                ]),
                authenticate: true
            },
            /* ======= Shipment Departure ======= */
            shipmentdeparture: {
                name: 'shipmentdeparture',
                url: '/shipmentdeparture',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/shipmentdeparture/list.html'
                    }
                },
                resolve: new Dependency([
                   'modules/shipmentdeparture/list'
                ]),
                authenticate: true
            },
            shipmentdeparture_add: {
                name: 'shipmentdeparture_add',
                url: '/shipmentdeparture/add',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/shipmentdeparture/add.html'
                    }
                },
                resolve: new Dependency([
                   'modules/shipmentdeparture/add'
                ]),
                authenticate: true
            },
            /* ======= Foreign Invoice ======= */
            foreigninvoice: {
                name: 'foreigninvoice',
                url: '/foreigninvoice',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/foreigninvoice/list.html'
                    }
                },
                resolve: new Dependency([
                   'modules/foreigninvoice/list'
                ]),
                authenticate: true
            },
            foreigninvoice_add: {
                name: 'foreigninvoice_add',
                url: '/foreigninvoice/add',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/foreigninvoice/add.html'
                    }
                },
                resolve: new Dependency([
                   'modules/foreigninvoice/add'
                ]),
                authenticate: true
            },
            /* ======= Customs Clearance ======= */
            customsclearance: {
                name: 'customsclearance',
                url: '/customsclearance',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/customsclearance/list.html'
                    }
                },
                resolve: new Dependency([
                   'modules/customsclearance/list'
                ]),
                authenticate: true
            },
            customsclearance_add: {
                name: 'customsclearance_add',
                url: '/customsclearance/add',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/customsclearance/add.html'
                    }
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
                resolve: new Dependency([
                   'modules/delivery/list'
                ]),
                authenticate: true
            },
            delivery_add: {
                name: 'delivery_add',
                url: '/delivery/add',
                parent: 'root',
                views: {
                    '@': {
                        templateUrl: '/modules/delivery/add.html'
                    }
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
        }
    };
});