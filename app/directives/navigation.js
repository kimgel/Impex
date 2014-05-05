'use strict';

define(['app'], function(app) {

/* Navigation states
=================================================================== */ 
    app.directive('activePath', [
        '$rootScope',
        '$location',
        function($rootScope, $location) {
            return {
                restrict: 'A',
                link: function(scope, element) {
                    scope.location = $location;
                    scope.$watch('location.path()', function(currentPath) {  
                        if (currentPath === element[0].attributes['href'].nodeValue) {
                            element.parent().addClass('active');
                        } else {
                            element.parent().removeClass('active');
                        }
                    });
                }
            };
        }
    ]);
});
