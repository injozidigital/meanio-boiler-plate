module.exports = function(grunt){

    grunt.initConfig({

        //load dependencies from package.json
        pkg: grunt.file.readJSON('package.json'),

        sass_globbing: {
            your_target: {
                files: {
                    'public/sass/partials/_combined.scss': 'public/sass/partials/**/*.scss'
                },
                options: {
                    useSingleQuotes: false,
                    signature: '// Hello, World!'
                }
            }
        },
        compass: {
            dist: {
                options: {
                    sassDir: 'public/sass',
                    cssDir: 'public/css/dist',
                    environment: 'production',
                    watch:true,
                    require: ['susy']
                }
            }
        }
    });

    //load plugin

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-sass-globbing');

    //execute task
    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', ['sass_globbing', 'compass']);


};


