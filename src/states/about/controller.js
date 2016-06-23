/**
 * @ngdoc controller
 * @name ngs.states:aboutCtrl
 *
 * @description
 * Стейт страницы "About"
 **/

angular.module('ngs.states').controller('aboutCtrl', function ($scope, StateCtrl) {
    class AboutCtrl extends StateCtrl {
        initialize() {
            super.initialize();
        }
    }

    new AboutCtrl($scope);
});