'use strict';

// TODO: Это не правильный тест. Переделать.
describe('homeCtrl', function () {
    var scope, ctrl;

    beforeEach(inject(function ($rootScope, $controller) {
        var scope = $rootScope.$new();
        var ctrl = $controller('homeCtrl', {
            $scope: scope
        });
    }));

    it('Должены быть определены разделы приложения для передачи параметров в navigationBar', function () {
        expect(scope.sections).toBeDefined();
    });
});
