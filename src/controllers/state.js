/**
 * @ngdoc provider
 * @name ngs.controllers:StateCtrl
 *
 * @description
 * Базовый класс стейтов
 **/

angular.module('ngs.controllers').provider('StateCtrl', function () {
    this.$get = function (BaseCtrl) {
        class StateCtrl extends BaseCtrl {
        }

        return StateCtrl;
    };
});
