'use strict';

describe('ngs', function() {
    it('Должна происходить автоматическая переадресация на страницу /index, когда адрес пустой', function() {
        browser.get('index.html');

        expect(browser.getLocationAbsUrl()).toMatch("/home");
    });

    describe('home', function() {
        beforeEach(function() {
            browser.get('index.html#!/home');
        });

        it('Должна отрендериться страница home, когда в адресной строке /home', function() {
            expect(element.all(by.css('.page')).count()).toEqual(1);
        });
    });
});