/**
 * @description
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
    }).state('home', {
        url: '/home',
        abstract: false,
        templateUrl: 'states/home/view.html',
        controller: 'homeCtrl',
        resolve: {
        }
    }).state('about', {
        url: '/about',
        abstract: false,
        templateUrl: 'states/about/view.html',
        controller: 'aboutCtrl',
        resolve: {
        }
    }).state('error', {
        url: '/error',
        abstract: false,
        templateUrl: 'states/error/view.html',
        controller: 'errorCtrl',
        resolve: {
        }
    });
});