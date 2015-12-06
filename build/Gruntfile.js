module.exports = function(grunt) {

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
    preprocess: {
        dist: {
            options: {
                context: {
                    VERSION: '<%= pkg.version %>',
                    ANALYTICS: grunt.file.exists('../src/google-analytics.inc') ? true : null
                }
            },
            files : [
                {
                    expand: true,
                    cwd: '../src',
                    src: ['*.html', 'offline-manifest.appcache'],
                    dest: '../output/'
                }
            ]
        }
    },
    copy: {
        dist: {
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
        }
    },
    browserify: {
        options: {
            transform:  [ require('grunt-react').browserify ]
        },
        dist: {
            src: '../src/js/app.js',
            dest: '../output/tmp/app.js'
        }
    },
    env: {
        dist: {
            NODE_ENV : grunt.option('environment') || 'development'
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

  // Default task(s).
  grunt.registerTask('default', [
    'env:dist',
    'clean:init',
    'less',
    'browserify',
    'uglify',
    'preprocess',
    'copy',
    'clean:finalize'
  ]);
};