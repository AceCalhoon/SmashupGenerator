module.exports = function(grunt) {
  var preProcessFiles = [
        {
            expand: true,
            cwd: '../src',
            src: ['*.html', 'offline-manifest.appcache'],
            dest: '../output/'
        }
    ];

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
        options: {
            force: true
        },
        "init": ["../output/**/*"],
        "finalize": ["../output/tmp"]
    },
    less: {
        dist: {
            options: {
                cleancss: true,
            },
            files: {
                '../output/Stylesheets/site-<%= pkg.version %>.min.css' : '../src/Stylesheets/**/site.less'
            }
        }
    },
    replace: {
        dist: {
            options: {
                patterns: [
                    {
                        match: /__VERSION__/g,
                        replacement: '<%= pkg.version %>'
                    }
                ]
            },
            files: [
                {
                    expand: true,
                    flatten: true,
                    cwd: '../output',
                    src: ['*.html', 'offline-manifest.appcache'],
                    dest: '../output/'
                },
                {
                    expand: true,
                    flatten: true,
                    cwd: '../output/tmp',
                    src: ['*.js'],
                    dest: '../output/tmp/'
                }
            ]
        }
    },
    preprocess: {
        options: {
            context: {
                VERSION: '<%= pkg.version %>',
                ANALYTICS: grunt.file.exists('../src/google-analytics.inc') ? true : null
            } 
        },
        production: {
            options: {
                context: {
                    DEBUG: undefined
                }
            },
            files: preProcessFiles
        },
        debug: {
            options: {
                context: {
                    DEBUG: true
                }
            },
            files : preProcessFiles
        }
    },
    copy: {
        base: {
            files: [
                {
                    expand: true,
                    cwd: '../src/Images',
                    src: ['**', '!Source/**'],
                    dest: '../output/Images/'
                },
                {
                    expand: true,
                    cwd: '../src',
                    src: ['*', '!*.html', '!*.inc', '!offline-manifest.appcache', '!package.json'],
                    dest: '../output/'
                },
                {
                    expand: true,
                    cwd: '../src/Fonts',
                    src: ['**', '!Source/**'],
                    dest: '../output/Fonts'
                }
            ]
        },
        debugjs: {
            files: [
                {
                    src: '../output/tmp/app.js',
                    dest: '../output/js/app.js'
                },
                {
                    expand: true,
                    cwd: '../src/js/Debug',
                    src: '**',
                    dest: '../output/js/Debug/'
                }
            ]
        },
        debugless: {
            expand: true,
            flatten: true,
            src: '../src/Stylesheets/**/*.less',
            dest: '../output/Stylesheets/' 
        }
    },
    browserify: {
        options: {
            transform:  [ require('grunt-react').browserify ]
        },
        dist: {
            src: '../src/js/app.js',
            dest: '../output/tmp/app.js'
        },
        debug: {
            src: '../src/js/app.js',
            dest: '../output/tmp/app.js',
            options: {
                browserifyOptions: { debug: true }
            }
        }
    },
    env: {
        dist: {
            NODE_ENV : 'production'
        },
        debug: {
            NODE_ENV : 'development'
        }
    },
    uglify: {
        options: {
            compress: true,
            dead_code: true
        },
        dist: {
            src: '../output/tmp/app.js',
            dest: '../output/js/app-<%= pkg.version %>.min.js'
        }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-preprocess');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-replace');

  // Default task(s).
  grunt.registerTask('default', [
    'env:debug',
    'clean:init',
    'browserify:debug',
    'preprocess:debug',
    'replace',
    'copy:base',
    'copy:debugjs',
    'copy:debugless',
    'clean:finalize'
  ]);
  
  grunt.registerTask('production', [
    'env:dist',
    'clean:init',
    'less',
    'browserify:dist',
    'preprocess:production',
    'replace',
    'uglify',
    'copy:base',
    'clean:finalize'
  ]);
};