module.exports = function(grunt) {
  grunt.initConfig({

    pkg: grunt.file.readJSON("package.json"),

    uglify: {
      options: {
        mangle: true
      },
      build: {
        src: "assets/*.js",
        dest: "js/main.js"
      }
    },

    sass: {
    dist: {
      options: {
        style: 'compressed'
      },
      files: {
        'css/main.css': '_sass/all.sass'
      },

      htmlmin: {                                     // Task
        dist: {                                      // Target
          options: {                                 // Target options
            removeComments: true,
            collapseWhitespace: true
          },
          files: {                                   // Dictionary of files
            'assets/index.html': '_site/index.html'
          }
        },
        dev: {                                       // Another target
          files: {
            'assets/index.html': '_site/index.html'
          }
        }
      }
    }
  }

  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ["uglify","sass","htmlmin"]);

};