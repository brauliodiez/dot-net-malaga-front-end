module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
        server: {
          options: {
            hostname: 'localhost',
            port: 8080,
            keepalive:true,
            base: 'src',
            directory: 'src',            
            open: {
              target: 'http://localhost:8080/index.html'
            }
          }
        }
     },
  });

  grunt.registerTask('default', ['web']);
  
  grunt.registerTask('web', ['connect']);

  grunt.loadNpmTasks('grunt-contrib-connect');
};