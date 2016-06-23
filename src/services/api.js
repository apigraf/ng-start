/**
 * @ngdoc service
 * @name ngs.services:APIService
 *
 * @description
 * Сервис для взаимодействием с сервером API
 **/

// TODO: Пока используем как заглушку. Но сразу устанавливаем Restangular: APIService будет обёрткой для Restangular.
angular.module('ngs.services').service('APIService', function (Restangular) {
    class APIService {
        get(route, params = {}, options = {}) {
            // TODO: Временная заглушка. Возвращаем данные. К примеру, локаль.
            var demoData = {
                settings: {
                    locale: 'ru',
                    index_page: 'home'
                },
                translations: {
                    DEMO_DATA: 'Демонстрационные данные. И использование переменных: {DATA}',
                    PAGE_TITLE_HOME: 'Главная',
                    PAGE_TITLE_ABOUT: 'О проекте'
                }
            };

            return demoData;
        }
    }

    return new APIService();
});
