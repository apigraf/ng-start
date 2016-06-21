/**
 * @ngdoc controller
 * @name ngs.states:indexCtrl
 *
 * @description
 * Стейт страницы "Index"
 **/

angular.module('ngs.states').controller('indexCtrl', function ($scope, StateCtrl) {
    class IndexCtrl extends StateCtrl {
        initialize() {
        }
    }

    new IndexCtrl($scope);
});