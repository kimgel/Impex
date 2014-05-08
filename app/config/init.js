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
                        var elementHref = element[0].attributes['href'].nodeValue;
                        var rootPath = currentPath.split('/')[1] + currentPath.split('/')[2];
                        var currenHref = elementHref.split('/')[1] + elementHref.split('/')[2];
                        if (rootPath === currenHref) {
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
