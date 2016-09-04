module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({
        browserify: {
            'public/gen/js.js': ['public/js/main.js'],
            options: {
                transform: [
                    'browserify-hogan'
                ]
            }
        },
        watch: {
            app: {
                files: [
                    'public/js/**',
                    '!node_modules/**',
                    '!public/gen/**'
                ],
                tasks: ['browserify'],
                options: {
                    nospawn: false,
                    livereload: true
                }
            },
            index: {
                files: [
                    'index.html'
                ],
                tasks: [],
                options: {
                    nospawn: false,
                    livereload: true
                }
            }
        }
    });

    grunt.registerTask('default', ['browserify', 'watch']);
};