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
                  },
                  {
                    src:'./src/index.html',
                    dest:'./build/index.html'
                  }
      ]
      }
    }

    ,concat: {
      dist: {
        files: {
         './build/app/app.min.js': [
            './src/app/app.js',
            './src/app/serviceModule.js',
            ['./src/app/components/**', '!./src/app/components/**/*.html'],
            ['./src/app/services/**', '!./src/app/services/**/*.html'],
          ],
          './build/app/lib.min.js': [
            './src/lib/jquery/dist/jquery.min.js',
            './src/lib/bootstrap/dist/js/bootstrap.min.js',
            './src/lib/angularjs/angular.min.js',
            './src/lib/angular-new-router/dist/router.es5.min.js'                       
          ],
          './build/app/style.css': [
            './src/lib/bootstrap/dist/css/bootstrap.css'
          ]
        }
      }
    }

    ,uglify: {
      build: {
        options: {
          sourceMap: true//,
          /*sourceMapName: './build/app/app.min.js.map'*/
        },        
        files: [
          {
            './build/app/app.min.js' : './build/app/app.min.js'            
          }
        ]              
      }        
    }

    ,processhtml: {
      dist: {
        files: {
          'build/index.html': ['src/index.html']
        }
      }
    }


    ,connect: {
      'staticDev': { // This server will serve HTML + JS not minified
            options: {
                hostname: 'localhost',
                base: 'src',
                directory: 'src',            
                port: 8081
            }
        },

      'staticMin': { // This server will serve HTML + JS minified
            options: {
                hostname: 'localhost',
                base: 'build',
                directory: 'build',            
                port: 8091
            }
        },

        serverDev: { // Proxy server, hub, will receive all request 
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

        ,serverMin: { // Proxy server, hub, will receive all request 
          options: {
            hostname: 'localhost',
            port: 8090,
            keepalive:true,
            middleware: function(connect) {
              return [proxySnippet];
            },            
            open: {
              target: 'http://localhost:8090/index.html'
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
                port: 8091
            }          
          ]
        }        
     },
  });

  grunt.registerTask('default', ['web']);
  
  grunt.registerTask('web', ['connect:staticDev', 'configureProxies:serverDev', 'connect:serverDev']);

  grunt.registerTask('webmin', ['connect:staticMin', 'configureProxies:serverMin', 'connect:serverMin']);

  grunt.registerTask('build', ['clean', 'copy', 'concat', 'uglify:build', 'processhtml']);


  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-connect-proxy');
  grunt.loadNpmTasks('grunt-contrib-clean');  
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-processhtml');
};