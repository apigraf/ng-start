/**
 * @ngdoc provider
 * @name ngs.services:initialize
 *
 * @description
 * Функция для получения инициализирующих данных
 **/

angular.module('ngs.services').provider('initialize', function () {
    this.$get = function ($q, APIService) {
        return function () {
            var deferred = $q.defer();

            $q.all({
                init: APIService.get('init')
            }).then(function (response) {
                deferred.resolve();
            }, function () {
            });

            return deferred.promise;
        }
    };
});
