/**
 * @ngdoc directive
 * @name ngs.components:navigationBar
 * @restrict E
 * @element ANY
 *
 * @description
 * Навигационное меню
 **/

angular.module('ngs.components').directive('navigationBar', function () {
    return {
        restrict: 'E',
        templateUrl: 'components/navigation-bar/view.html',
        controller: 'navigationBarCtrl',
        scope: {
            sections: '<',
            currentState: '<'
        },
        link: function (scope, element, attrs) {
        }
    }
});
