module.exports = function(grunt) {
  var proxySnippet = require('grunt-connect-proxy/lib/utils').proxyRequest;

  grunt.initConfig({
    clean: ["build"]

    ,copy: {
      main: {
         files: [
                  {
                      expand: true, 
                      cwd: './src/app/components', 
                     src: ['**', '!**/*.js'], 
                     dest: './build/app/components'
                  }
      ]
      }
    }

    ,connect: {
      'static': { // This server will serve HTML + JS
            options: {
                hostname: 'localhost',
                base: 'src',
                directory: 'src',            
                port: 8081
            }
        },

        server: { // Proxy server, hub, will receive all request 
          options: {
            hostname: 'localhost',
            port: 8080,
            keepalive:true,
            middleware: function(connect) {
              return [proxySnippet];
            },            
            open: {
              target: 'http://localhost:8080/index.html'
            }
          },
          proxies: [ // Proxy configuration, if /api or /images request redirect to web api server
            {        // else redirect to static server (html + js)
                context: ['/api', '/images'],
                host: 'localhost',
                port: 10048
            },
            {
                context: '/',
                host: 'localhost',
                port: 8081
            }          
          ]
        }
     },
  });

  grunt.registerTask('default', ['web']);
  
  grunt.registerTask('web', ['connect:static', 'configureProxies:server', 'connect:server']);

  grunt.registerTask('build', ['clean', 'copy']);


  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-contrib-clean');  
  grunt.loadNpmTasks('grunt-contrib-copy');
};