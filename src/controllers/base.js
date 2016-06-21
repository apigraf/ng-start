/**
 * @ngdoc provider
 * @name ngs.controllers:BaseCtrl
 *
 * @description
 * Базовый класс контроллеров
 **/

angular.module('ngs.controllers').provider('BaseCtrl', function () {
    this.$get = function () {
        class BaseCtrl {
            constructor($scope) {
                this.scope = $scope;

                // Делаем доступным lodash в шаблонах
                this.scope._ = _;

                this.initialize($scope);
            }

            initialize($scope) {
            }
        }

        return BaseCtrl;
    };
});
