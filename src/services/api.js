/**
 * @ngdoc service
 * @name ngs.services:APIService
 *
 * @description
 * Сервис для взаимодействием с сервером API
 **/

angular.module('ngs.services').service('APIService', function (Restangular) {
    class APIService {
        get(route, params = {}, options = {}) {
            if (!_.isString(route)) {
                return false;
            }
            
            return Restangular.one(route).get(params);
        }
    }

    return new APIService();
});
