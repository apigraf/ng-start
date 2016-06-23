/**
 * @ngdoc service
 * @name ngs.services:stateService
 *
 * @description
 * Сервис для осуществления навигации между страницами
 **/

angular.module('ngs.services').service('stateService', function ($state, $stateParams) {
    class StateService {
        /**
         * Переход к состоянию
         */
        go(stateName, stateParams = null) {
            if (!stateName) {
                return;
            }

            $state.go(stateName, stateParams);
        }

        /**
         * Переход на страницу ошибки
         */
        showError(errors = null) {
            var params = {
                errors: [],
                executed: true
            };

            switch (true) {
                case _.isString(errors):
                    params.errors = [{message: errors}];
                    break;
                case _.isArray(errors):
                    params.errors = errors;
                    break;
                case _.isObject(errors):
                    params.errors = [errors];
                    break;
            }

            $state.transitionTo('error', params, {location: false});
        }

        /**
         * Проверяет, является ли переданное состояние активным
         */
        isCurrent(stateName) {
            return stateName === $state.$current.name;
        }

        /**
         * Возвращает имя активного состояния
         */
        current() {
            return $state.$current.name;
        }

        /**
         * Перезагрузка страницы
         */
        reload() {
            $state.transitionTo($state.current, $stateParams, {
                reload: true, inherit: false, notify: true
            });
        }
    }

    return new StateService();
});
