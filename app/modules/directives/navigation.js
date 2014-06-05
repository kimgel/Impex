'use strict';

define(['app'], function (app) {
    app.directive('slideable', function () {
        return {
            restrict:'C',
            compile: function (element) {
                // wrap tag
                var contents = element.html();
                element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

                return function postLink(scope, element, attrs) {
                    // default properties
                    attrs.duration = '300ms';
                    attrs.easing = (!attrs.easing) ? 'ease-in-out' : attrs.easing;
                    element.css({
                        'overflow': 'hidden',
                        'height': '0px',
                        'transitionProperty': 'height',
                        'transitionDuration': attrs.duration,
                        'transitionTimingFunction': attrs.easing
                    });
                };
            }
        };
    });

    app.directive('slideToggle', function() {
        return {
            restrict: 'A',
            link: function(scope, element, attrs) {
                var target = document.querySelector(attrs.slideToggle);
                attrs.expanded = false;
                element.bind('click', function() {
                    var content = target.querySelector('.slideable_content');
                    var icon = angular.element(element[0]);
                    if(!attrs.expanded) {
                        var y = content.clientHeight;
                        target.style.height = y + 'px';
                        icon.html('<i class="fa fa-minus-square-o"></i>');
                    } else {
                        target.style.height = '0px';
                        icon.html('<i class="fa fa-plus-square-o"></i>');
                    }
                    attrs.expanded = !attrs.expanded;
                });
            }
        }
    });
});