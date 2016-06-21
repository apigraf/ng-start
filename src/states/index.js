/**
 * Описание состояний
 **/

angular.module('ngs.states', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/index");

    $stateProvider.state('index', {
        url: '/index',
        abstract: false,
        templateUrl: 'states/index/view.html',
        controller: 'indexCtrl',
        resolve: {
        }
    });
});