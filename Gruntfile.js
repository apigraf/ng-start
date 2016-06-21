module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-ngdocs');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.initConfig({
        ngdocs: {
            options: {
                scripts: ['angular.js'],
                html5Mode: false
            },
            all: ['src/**/*.js']
        },
        connect: {
            options: {
                keepalive: true
            },
            server: {}
        },
        clean: ['docs'],
        open : {
            docs : {
                path: 'http://localhost:8000/docs/#/api'
            }
        }
    });

    grunt.registerTask('docs', ['clean', 'ngdocs', 'open:docs', 'connect']);
    
    grunt.registerTask('default', ['docs']);

    grunt.loadNpmTasks('grunt-open');
};