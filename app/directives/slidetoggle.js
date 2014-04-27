'use strict';

define(['app'], function(app) {

/* Slide Toggle
=================================================================== */
    app.directive('slideable', [
        '$rootScope',
        function($rootScope) {
            return {
                restrict: 'C',
                compile: function(element, attr) {
                    var contents = element.html();
                    element.html('<div class="slideable_content" style="margin:0 !important; padding:0 !important" >' + contents + '</div>');

                    return function postLink(scope, element, attrs) {
                        attrs.duration = (!attrs.duration) ? '1s' : attrs.duration;
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
        }
    ]);

    app.directive('slideToggle', [
        '$rootScope',
        function($rootScope) {
            return {
                restrict: 'A',
                link: function(scope, element, attrs) {
                    var target, content;

                    attrs.expanded = false;

                    element.bind('click', function() {
                        if (!target) target = document.querySelector(attrs.slideToggle);
                        if (!content) content = target.querySelector('.slideable_content');

                        var icon = angular.element(element[0].children[1]);
                        if (!attrs.expanded) {
                            var y = content.clientHeight;                           
                            content.style.border = 0;
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
        }
    ]);
});
