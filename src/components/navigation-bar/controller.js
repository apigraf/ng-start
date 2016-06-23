/**
 * @ngdoc controller
 * @name ngs.states:navigationBar
 *
 * @description
 * Контроллер навигационного меню
 **/

angular.module('ngs.components').controller('navigationBarCtrl', function ($scope, BaseCtrl) {
    class NavigationBarCtrl extends BaseCtrl {
        initialize() {
        }
    }

    new NavigationBarCtrl($scope);
});