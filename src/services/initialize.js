/**
 * @ngdoc provider
 * @name ngs.services:initialize
 *
 * @description
 * Функция для получения инициализирующих данных
 **/

angular.module('ngs.services').provider('initialize', function () {
    this.$get = function ($q, APIService, settingsService, $timeout, $translate, translateLoader) {
        return function () {
            var deferred = $q.defer();

            // Инициализирующий запрос
            $q.all({
                init: APIService.get('init')
            }).then(function (response) {
                // Устанавливаем переводы, и если не загрузились, устанавливаем значения по умолчанию
                if (response.init && !_.isEmpty(response.init.translations)) {
                    translateLoader.setTranslations(response.init.translations);
                } else {
                    translateLoader.setDefaults();
                }

                // Устанавливаем загруженные настройки приложения
                if (response.init && !_.isEmpty(response.init.settings)) {
                    settingsService.set(response.init.settings);
                    
                    // Устанавливаем текущую локаль
                    $translate.preferredLanguage(settingsService.get('locale'));
                    $translate.use(settingsService.get('locale'));
                    
                    // TODO: Удалить демонстрационный вывод перевода. Перенести в тесты.
                    $timeout(() => {
                        console.log($translate.instant('demo_data', {DATA: 'переменная_в_метке_локализации'}));
                    });
                }
                
                deferred.resolve();
            }, function () {
                translateLoader.setDefaults();

                // Таймаут для загрузки переводов
                $timeout(() => {
                    console.log($translate.instant('api_error_message'));
                });
            });

            return deferred.promise;
        }
    };
});
