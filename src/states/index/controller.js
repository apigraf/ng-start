/**
 * @ngdoc controller
 * @name ngs.states:indexCtrl
 *
 * @description
 * Стейт страницы "Index"
 **/

angular.module('ngs.states').controller('indexCtrl', function ($scope, StateCtrl, stateService, settingsService) {
    class IndexCtrl extends StateCtrl {
        initialize() {
            stateService.go(settingsService.get('index_page'));
        }
    }

    new IndexCtrl($scope);
});