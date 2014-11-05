module.exports = function(grunt) {
  grunt.initConfig({
      pkg: grunt.file.readJSON("package.json"),

      uglify: {
        options: {
          mangle: true
        },
        build: {
          src: "js/*.js",
          dest: "_site/js/main.js"
        }
      },
      cssmin : {
            css:{
                src: '_site/css/main.css',
                dest: '_site/css/main.css'
            }
        }
  });

  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ["uglify", 'cssmin:css']);

};