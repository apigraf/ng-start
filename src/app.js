/**
 * Инициализация, запуск приложения и установка конфигураций
 */

var app = angular.module('ngs', [
    'ngs.config',
    'ngs.filters',
    'ngs.services',
    'ngs.controllers',
    'ngs.directives',
    'ngs.states',
    'ngs.components'
]).constant('_', _);

app.run(function ($rootScope, $window, $templateCache) {
    $rootScope._ = $window._;

    return _.filter($window.JST, function (fileContent, fileName) {
        return $templateCache.put(fileName, fileContent());
    });
}).config(function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true
    });
});