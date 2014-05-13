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
            /* ======= Settings: Item======= */
            settings_master_item: {
                name: 'settings_master_item',
                url: '/settings/master/item',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/item/list.html'
                    }
                },
                resolve: new Dependency([
                    'modules/item/list'
                ]),
                authenticate: true
            },
            settings_master_item_add: {
                name: 'settings_master_item_add',
                url: '/settings/master/item/add',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/item/add.html'
                    }
                },
                resolve: new Dependency([
                    'modules/item/add'
                ]),
                authenticate: true
            },
            settings_master_item_view: {
                name: 'settings_master_item_view',
                url: '/settings/master/item/:itemId',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/item/view.html'
                    }
                },
                resolve: new Dependency([
                    'modules/item/view'
                ]),
                authenticate: true
            },
            settings_master_item_edit: {
                name: 'settings_master_item_edit',
                url: '/settings/master/item/:itemId/edit',
                parent: 'settings',
                views: {
                    '@': {
                        templateUrl: '/modules/item/edit.html'
                    }
                },
                resolve: new Dependency([
                    'modules/item/edit'
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

            /* ======= Settings: Supplier ======= */
            settings_master_supplier: {
                name: 'settings_master_supplier',
                url: '/settings/master/supplier',
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
            settings_master_supplier_add: {
                name: 'settings_master_supplier_add',
                url: '/settings/master/supplier/add',
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
            settings_master_supplier_view: {
                name: 'settings_master_supplier_view',
                url: '/settings/master/supplier/:supplierId',
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
            settings_master_supplier_edit: {
                name: 'settings_master_supplier_edit',
                url: '/settings/master/supplier/:supplierId/edit',
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
            }
        }
    };
});