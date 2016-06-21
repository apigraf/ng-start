/**
 * @ngdoc provider
 * @name ngs.services:StorageService
 *
 * @description
 * Класс для хранения произвольных данных
 **/

angular.module('ngs.services').provider('StorageService', function () {
    this.$get = function () {
        class StorageService {
            constructor() {
                this.storage = {};
            }

            get(name) {
                if (name)
                    return this.storage[name];
                else
                    return this.storage;
            }

            set(key, value = null) {
                if (_.isPlainObject(key)) {
                    _.extend(this.storage, key);
                } else {
                    this.storage[key] = value;
                }
            }

            flush() {
                this.storage = {};
            }

            isEmpty() {
                return _.isEmpty(this.storage);
            }
        }

        return StorageService;
    };
});
