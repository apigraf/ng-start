/**
 * @ngdoc controller
 * @name ngs.states:homeCtrl
 *
 * @description
 * Стейт страницы "Home"
 **/

angular.module('ngs.states').controller('homeCtrl', function ($scope, StateCtrl) {
    class HomeCtrl extends StateCtrl {
        initialize() {
        }
    }

    new HomeCtrl($scope);
});