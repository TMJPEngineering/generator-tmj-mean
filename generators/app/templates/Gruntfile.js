module.exports = function(grunt) {
    grunt.initConfig({
        watch: {
            src: {
                files: ['modules/**/*.js', '!modules/**/server/*.js', '!modules/**/server/**/*.js', 'resources/assets/style.scss'],
                tasks: ['browserify', 'uglify', 'sass']
            }
        },
        browserify: {
            auth: {
                src: 'modules/auth/client/*.js',
                dest: 'public/dist/auth/auth.js'
            },
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
            home: {
                src: 'modules/home/client/*.js',
                dest: 'public/dist/home/home.js'
            },
            shared: {
                src: 'modules/shared/client/**/*.js',
                dest: 'public/dist/shared/shared.js'
            },
            user: {
                src: 'modules/user/client/**/*.js',
                dest: 'public/dist/user/user.js'
            }
        },
        uglify: {
            auth: {
                options: { mangle: false, compress: true },
                src: 'public/dist/auth/auth.js',
                dest: 'public/dist/auth/auth.min.js'
            },
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
            home: {
                options: { mangle: false, compress: true },
                src: 'public/dist/home/home.js',
                dest: 'public/dist/home/home.min.js'
            },
            shared: {
                options: { mangle: false, compress: true },
                src: 'public/dist/shared/shared.js',
                dest: 'public/dist/shared/shared.min.js'
            },
            user: {
                options: { mangle: false, compress: true },
                src: 'public/dist/user/user.js',
                dest: 'public/dist/user/user.min.js'
            }
        },
        sass: {
            dist: {
                files: {
                    'public/assets/css/style.css' : 'resources/assets/style.scss'
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
