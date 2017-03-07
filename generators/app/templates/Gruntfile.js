'use strict';

module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            livereload: {
                options: {
                    livereload: true
                },
                files: [
                    'modules/**/*',
                    '!modules/**/server/*.js',
                    '!modules/**/server/**/*.js',
                    'resources/assets/style.scss'
                ],
                tasks: ['browserify', 'uglify', 'sass']
            },
        },
        browserify: {
            core: {
                src: 'modules/core/client/app/*.js',
                dest: 'public/dist/core/core.js'
            },
            config: {
                src: 'modules/core/client/config/*.js',
                dest: 'public/dist/config/config.js'
            },
            modules: {
                src: [
                    'modules/**/client/module/*.js',
                    'modules/shared/client/**/module/*.js'
                ],
                dest: 'public/dist/modules.js'
            },
            shared: {
                src: 'modules/shared/client/**/*.js',
                dest: 'public/dist/shared/shared.js'
            },
            client: {
                src: [
                    'modules/**/client/*.js',
                    '!modules/**/client/*.test.js',
                    '!modules/**/client/module/*.js'
                ],
                dest: 'public/dist/client.js'
            }
        },
        uglify: {
            core: {
                options: { mangle: false, compress: true },
                src: 'public/dist/core/core.js',
                dest: 'public/dist/core/core.min.js'
            },
            config: {
                options: { mangle: false, compress: true },
                src: 'public/dist/config/config.js',
                dest: 'public/dist/config/config.min.js'
            },
            modules: {
                options: { mangle: false, compress: true },
                src: 'public/dist/modules.js',
                dest: 'public/dist/modules.min.js'
            },
            shared: {
                options: { mangle: false, compress: true },
                src: 'public/dist/shared/shared.js',
                dest: 'public/dist/shared/shared.min.js'
            },
            client: {
                options: { mangle: false, compress: true },
                src: 'public/dist/client.js',
                dest: 'public/dist/client.min.js'
            }
        },
        sass: {
            dist: {
                files: {
                    'public/assets/css/style.css': 'resources/assets/style.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.registerTask('default', ['browserify', 'uglify', 'sass', 'watch']);
};
