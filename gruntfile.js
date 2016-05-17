module.exports = function(grunt){
    grunt.initConfig({
        slim: {                              // Task
            dist: {                            // Target
                files: {                         // Dictionary of files
                    './html/index.html': './slim/index.slim'
                }
            }
        },
        sass: {                              // Task
            dist: {                            // Target
                options: {                       // Target options
                    style: 'expanded'
                },
                files: {                         // Dictionary of files
                    './css/main.css': './sass/index/main.scss'       // 'destination': 'source'
                }
            }
        },
        sprite:{
            all:{
                src: './files/images/sprites/**/**/**/*.png',
                dest: './files/images/sprites.png',
                destCss: './sass/index/generated/_sprites.scss',
                cssTemplate: './grunt/templates/sprites.scss.handlebars',
                imgPath: '../files/images/sprites.png',
                padding: 2
            }
        },
        watch: {
            files: ['sass/**/*.scss', '**/**/*.slim', './files/images/sprites/**/**/**/*.png'],
            tasks: ['slim', 'sass',  'sprite']
        }
    });

    grunt.loadNpmTasks('grunt-slim');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-spritesmith');

    grunt.registerTask('default', ['slim', 'sass', 'sprite', 'watch']);
}