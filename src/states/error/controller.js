/**
 * @ngdoc controller
 * @name ngs.states:errorCtrl
 *
 * @description
 * Стейт страницы ошибки
 **/

angular.module('ngs.states').controller('errorCtrl', function ($scope, StateCtrl) {
    class ErrorCtrl extends StateCtrl {
        initialize() {
        }
    }

    new ErrorCtrl($scope);
});