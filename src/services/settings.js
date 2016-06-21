/**
 * @ngdoc service
 * @name ngs.services:settingsService
 *
 * @description
 * Класс для хранения настроек приложения
 **/

angular.module('ngs.services').service('settingsService', function (StorageService) {
    class SettingsService extends StorageService {
    }

    return new SettingsService();
});
