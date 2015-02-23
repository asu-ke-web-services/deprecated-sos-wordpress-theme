module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= props.license %> */\n',

        // PHP Code Sniffer
        // ================
        phpcs: {
            core: {
                dir: ['*.php']
            },
            options: {
                bin: 'vendor/bin/phpcs',
                standard: 'Wordpress'
            }
        },
        // JS Hint
        // =======
        jshint: {
            options: {
                jshintrc: 'js/.jshintrc'
            },
            core: {
                src: 'js/*.js'
            }
        },
        // JS Coding Style
        // ===============
        jscs: {
            options: {
                config: 'js/.jscsrc'
            },
            core: {
                src: '<%= jshint.core.src %>'
            }
        },
        // QUnit
        // =====
        // qunit: {
        //     options: {
        //         inject: 'test/qunit/phantom.js'
        //     },
        //     files: ['test/qunit/index.html']
        // },
        // SCSS Lint
        // =========
        scsslint: {
            allFiles: [
                'scss/*.scss',
                'scss/mixins/*.scss',
                'scss/theme/*.scss'
            ],
            options: {
              bundleExec: true,
              config: 'scss/.scss-lint.yml',
              colorizeOutput: true
          }
        },
        // SASS Compile
        // ============
        sass: {
            options: {
                style: 'expanded',
                sourcemap: 'auto'
            },
            dist: {
                files: {
                    'build/css/sos-wordpress-theme.css' : 'scss/sos-wordpress-theme.scss',
                }
            }
        },
        // JS Compile
        // ==========
        concat: {
            bootstrapAsu: {
                src: [
                    'js/sos-wordpress-theme.js',
                    'js/lib/*.js',
                    'js/_*.js'
                ],
                dest: 'build/js/sos-wordpress-theme.js'
            }
        },
        // JS Uglify
        // =========
        uglify: {
          options: {
            preserveComments: 'some'
          },
          core: {
            src: 'build/js/sos-wordpress-theme.js',
            dest: 'build/js/sos-wordpress-theme.min.js'
          }
        },
        // Watch
        // =====
        watch: {
            core: {
                files: '<%= jshint.core.src %>',
                tasks: ['jshint:core', 'qunit']
            }
        }
    });

    // These plugins provide necessary tasks
    // grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-jscs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-scss-lint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-phpcs');

    // Default task
    grunt.registerTask('default', [
        'jshint',
        'jscs',
        'scsslint',
        // 'qunit',
        'sass',
        'concat',
        'uglify',
        'phpcs']);
};

