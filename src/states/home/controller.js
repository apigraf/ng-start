/**
 * @ngdoc controller
 * @name ngs.states:homeCtrl
 *
 * @description
 * Стейт страницы "Home"
 **/

angular.module('ngs.states').controller('homeCtrl', function ($scope, StateCtrl, settingsService, $translate) {
    class HomeCtrl extends StateCtrl {
        initialize() {
            super.initialize();
            
            // Метку помещаем в переменную только для демонстрации тестов
            this.scope.demoText = 'DEMO_DATA';
        }
    }

    new HomeCtrl($scope);
});