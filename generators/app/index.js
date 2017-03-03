'use strict';

var generator = require('yeoman-generator'),
    chalk = require('chalk'),
    yosay = require('yosay');

module.exports = generator.extend({
    prompting: function () {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the fine ' + chalk.red('TMJ Mean Stack Framework') + ' generator!'
        ));

        var prompts = [{
            type: 'input',
            name: 'package_name',
            message: 'Your package name',
            default: this.appname.replace(' ', '-')
        }, {
            type: 'input',
            name: 'name',
            message: 'Your project name',
            default: this.appname.ucwords()
        }, {
            type: 'input',
            name: 'description',
            message: 'Your project\'s description',
            default: this.appname.ucwords() + ' Description'
        }, {
            type: 'input',
            name: 'author',
            message: 'Author of this project',
            default: 'TMJP Engineering'
        }, {
            type: 'input',
            name: 'repository',
            message: 'Your github repository',
            default: ''
        }, {
            type: 'input',
            name: 'license',
            message: 'Your license name',
            default: 'MIT'
        }];

        return this.prompt(prompts).then(function (props) {
            this.props = props;
        }.bind(this));
    },

    writing: {
        config: function () {
            this.fs.copy(
                this.templatePath('.env.example'),
                this.destinationPath('.env')
            );

            this.fs.copy(
                this.templatePath('.gitignore'),
                this.destinationPath('.gitignore')
            );

            this.fs.copy(
                this.templatePath('app.js'),
                this.destinationPath('app.js')
            );

            this.fs.copy(
                this.templatePath('server.js'),
                this.destinationPath('server.js')
            );

            this.fs.copy(
                this.templatePath('Gruntfile.js'),
                this.destinationPath('Gruntfile.js')
            );

            this.fs.copy(
                this.templatePath('karma.conf.js'),
                this.destinationPath('karma.conf.js')
            );

            this.fs.copyTpl(
                this.templatePath('_package.json'),
                this.destinationPath('package.json'),
                this.props
            );

            this.fs.copyTpl(
                this.templatePath('_bower.json'),
                this.destinationPath('bower.json'),
                this.props
            );

            this.fs.copyTpl(
                this.templatePath('_README.md'),
                this.destinationPath('README.md'), {
                    name: this.props.name,
                    description: this.props.description
                }
            );

            this.fs.copyTpl(
                this.templatePath('_LICENSE'),
                this.destinationPath('LICENSE'), {
                    author: this.props.author
                }
            );
        },
        app: function () {
            this.fs.copy(
                this.templatePath('config'),
                this.destinationPath('config')
            );

            this.fs.copy(
                this.templatePath('modules'),
                this.destinationPath('modules')
            );

            this.fs.copy(
                this.templatePath('resources'),
                this.destinationPath('resources')
            )

            this.fs.copy(
                this.templatePath('tests/.gitkeep'),
                this.destinationPath('tests/.gitkeep')
            );

            this.fs.copy(
                this.templatePath('vendor'),
                this.destinationPath('vendor')
            );

            this.fs.copyTpl(
                this.templatePath('_resources/views/index.html'),
                this.destinationPath('resources/views/index.html'), {
                    name: this.props.name
                }
            );

            this.fs.copyTpl(
                this.templatePath('_resources/layouts/nav.html'),
                this.destinationPath('resources/views/layouts/nav.html'), {
                    name: this.props.name
                }
            );

            this.fs.copyTpl(
                this.templatePath('_resources/auth/nav.html'),
                this.destinationPath('resources/views/auth/nav.html'), {
                    name: this.props.name
                }
            );
        },
        install: function () {
            this.installDependencies();
        }
    }
});

String.prototype.ucwords = function(str) {
    str = this.toLowerCase();
    return str.replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g,
        function($1){
            return $1.toUpperCase();
        });
}