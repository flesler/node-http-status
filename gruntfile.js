/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: { jshintrc: true },
      gruntfile: { src: 'Gruntfile.js' },
      index: { src: 'index.js' },
      test: { src: 'test/**/*.js' }
    },
    jasmine_nodejs: {
      options: { specNameSuffix: 'Spec.js' },
      tests: { specs: 'test/spec/**' }
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-jasmine-nodejs');

  grunt.registerTask('test', ['jshint', 'jasmine_nodejs']);
  grunt.registerTask('default', ['test']);

};
