module.exports = function(grunt) {
    require('jit-grunt')(grunt);
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.initConfig({
        copy: {
            target: {
                files: [{
                        expand: true,
                        src: ['node_modules/font-awesome/**'],
                        dest: 'public/'
                    },

                ]
            }
        },
        less: {
            production: {
                files: {
                    'public/css/style.css': 'css/style.less'
                }
            }
        },
        browserify: {
            'public/gen/js.js': ['js/main.js'],
            options: {
                transform: [
                    'browserify-hogan', ['babelify', {
                        'presets': ['latest']
                    }]
                ]
            }
        },
        watch: {
            app: {
                files: [
                    'js/**',
                    '!node_modules/**',
                    '!public/gen/**',
                    'css/**'
                ],
                tasks: ['browserify', 'less'],
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

    grunt.registerTask('default', ['copy', 'browserify', 'less', 'watch']);
};;
