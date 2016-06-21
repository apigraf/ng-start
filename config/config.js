'use strict';

/**
 * Конфигурация приложения, зависящая от окружения (dev, prod и т.д.)
 */

angular.module('ngs.config', [])
    .constant('configuration', {
        APIURL: '@@APIURL',
        CDNURL: '@@CDNURL'
    });
