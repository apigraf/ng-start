/**
 * Инициализация, запуск приложения и установка конфигураций
 */

var app = angular.module('ngs', [
    'restangular',
    'pascalprecht.translate',

    'ngs.config',
    'ngs.filters',
    'ngs.services',
    'ngs.controllers',
    'ngs.directives',
    'ngs.states',
    'ngs.components'
]).constant('_', _);

app.run(function ($rootScope, $window, $templateCache, configuration, Restangular) {
    $rootScope._ = $window._;

    Restangular.setBaseUrl(configuration.APIURL);

    return _.filter($window.JST, function (fileContent, fileName) {
        return $templateCache.put(fileName, fileContent());
    });
}).config(function ($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true
    });
}).config(function ($translateProvider) {
    $translateProvider.useLoader('translateLoader', {});
    $translateProvider.useMessageFormatInterpolation();
    $translateProvider.useSanitizeValueStrategy(null);
    $translateProvider.preferredLanguage('ru');
});