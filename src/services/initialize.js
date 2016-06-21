/**
 * @ngdoc provider
 * @name ngs.services:initialize
 *
 * @description
 * Функция для получения инициализирующих данных
 **/

angular.module('ngs.services').provider('initialize', function () {
    this.$get = function ($q, APIService, settingsService) {
        return function () {
            var deferred = $q.defer();

            $q.all({
                init: APIService.get('init')
            }).then(function (response) {
                if (response.init && !_.isEmpty(response.init.settings)) {
                    settingsService.set(response.init.settings);
                }
                
                deferred.resolve();
            }, function () {
            });

            return deferred.promise;
        }
    };
});
