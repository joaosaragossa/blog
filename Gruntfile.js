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
      }
    }
  }

  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('default', ["uglify","sass"]);

};