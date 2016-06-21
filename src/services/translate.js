/**
 * @ngdoc factory
 * @name ngs.services:translateLoader
 *
 * @description
 * Класс для отложенной загрузки переводов в $translateProvider
 *
 **/

angular.module('ngs.services').factory('translateLoader', function ($q, $timeout) {
    class TranslateLoader {
        constructor() {
            this.translations = null;
            this.deferred = null;
            this.isLoaded = false;
        }

        /**
         * Получение promise для $translateProvider
         * @returns {*}
         */
        getPromise() {
            this.deferred = $q.defer();

            if (!_.isEmpty(this.translations)) {
                $timeout(() => {
                    this.deferred.resolve(this.translations);
                });
            }

            return this.deferred.promise;
        }

        /**
         * Заполение массива переводов данными полученными с сервера
         * @param translations
         */
        setTranslations(translations) {
            this.translations = translations;
            this.isLoaded = true;
            this.resolve();
        }

        /**
         * Предустановленные переводы на случай, если нет возможности получить с сервера
         */
        setDefaults() {
            this.translations = {
                api_error_message: 'Ошибка обращения к API'
            };
            this.resolve();
        }

        resolve() {
            if (this.deferred) {
                this.deferred.resolve(this.translations);
            }
        }
    }

    var translateLoader = new TranslateLoader();
    var result = function (options) {
        return translateLoader.getPromise();
    };
    result.setTranslations = function (translations) {
        translateLoader.setTranslations(translations);
    };
    result.setDefaults = function (translations) {
        translateLoader.setDefaults(translations);
    };
    result.isLoaded = function () {
        return translateLoader.isLoaded;
    };

    return result;
});