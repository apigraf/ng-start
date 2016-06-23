'use strict';

describe('ngs', function() {
    it('demo', function() {
        browser.get('index.html');
        expect(browser.getLocationAbsUrl()).toMatch("/index");
    });

    describe('index', function() {

        beforeEach(function() {
            browser.get('index.html/index');
        });


        it('should ...', function() {
            expect(element.all(by.css('div')).first().getText()).toMatch(/demo/);
        });

    });
});