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
            /* ======= Settings ======= */
            settings_item: {
                name: 'settings_item',
                url: '/settings/item',
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
            settings_item_add: {
                name: 'settings_item_add',
                url: '/settings/item/add',
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
            settings_item_view: {
                name: 'settings_item_view',
                url: '/settings/item/:itemId',
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
            settings_item_edit: {
                name: 'settings_item_edit',
                url: '/settings/item/:itemId/edit',
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
            /* ======= Settings Broker======= */
            settings_broker: {
                name: 'settings_broker',
                url: '/settings/broker',
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
            settings_broker_add: {
                name: 'settings_broker_add',
                url: '/settings/broker/add',
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
            settings_broker_view: {
                name: 'settings_broker_view',
                url: '/settings/broker/:brokerId',
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
            settings_broker_edit: {
                name: 'settings_broker_edit',
                url: '/settings/broker/:brokerId/edit',
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

            /* ======= Settings Supplier ======= */
            settings_supplier: {
                name: 'settings_supplier',
                url: '/settings/supplier',
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
                url: '/settings/supplier/add',
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
                url: '/settings/supplier/:supplierId',
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
                url: '/settings/supplier/:supplierId/edit',
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
            /* ======= Settings Forwarder ======= */
            settings_forwarder: {
                name: 'settings_forwarder',
                url: '/settings/forwarder',
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
            settings_forwarder_add: {
                name: 'settings_forwarder_add',
                url: '/settings/forwarder/add',
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
            settings_forwarder_view: {
                name: 'settings_forwarder_view',
                url: '/settings/forwarder/:forwarderId',
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
            settings_forwarder_edit: {
                name: 'settings_forwarder_edit',
                url: '/settings/forwarder/:forwarderId/edit',
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
            /* ======= Settings User ======= */
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
             /* ======= Settings User ======= */
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
            }
        }
    };
});