# TMJ Mean Stack Framework Generator
[![npm version](https://img.shields.io/npm/v/generator-tmj-mean.svg)](https://www.npmjs.org/package/generator-tmj-mean)

Mean Stack Framework Generator using Yeoman

## Getting Started

You will need to install `yeoman` using `npm`. Be sure to have [NodeJS](https://nodejs.org/en/download/) installed before doing it so.

```
npm install yo -g
```

### Locally

You need to download or clone this to a new project locally name it `generator-tmj-mean`. Then run it in git shell.

```
git clone https://github.com/TMJPEngineering/generator-tmj-mean.git > generator-tmj-mean
```

Go to the root directory of this project, then type:

```
npm link
```

That will install this generator dependencies and symlink a global module to your local file. After `npm` is done your good to go to your project.

### Globally

Or if you don't want to download or clone this, you can install it using `npm`:

```
npm install -g generator-tmj-mean
```

## Usage

In your project, you can create a mean stack framework.

```
yo tmj-mean
```

Once it finished, run this command:

```
grunt
```

Be sure to have [grunt](https://gruntjs.com/) installed before doing it so.

Before you start your application, check first if you have `nodemon`. If not, install this:

```
npm install -g nodemon
```
	
Then finally, start your application by running this command:

```
nodemon
```

## Testing

This project used `jasmine` as a testing framework. Before you make a test, you need to install [karma](https://karma-runner.github.io/latest/intro/installation.html) globally. Feel free to modify your own configuration in `karma.conf.js`.

After that, you can now run test by this command:

```
karma start
```

## Folder Structure

```
├── config/
│   └── lib/
├── modules/
│   ├── Core/
│   ├── Shared/
│   ├── User/
│   └── Welcome/
├── * public/
│   ├── * assets/
│   │   └── * css/
│   └── * dist/
├── resources/
│   ├── assets/
│   └── views/
│       └── layouts/
└── vendor/
```

**NOTE:** This *asterisk symbol* shows that it will be generated using `grunt`.

## Issues

- **MongoError: failed to connect to server [localhost:27017] on first connect**
  - If this error shows up in your terminal, you need to install `MongoDB` then run the `mongod` server. See [here](https://docs.mongodb.com/manual/administration/install-community/) for installation.
- Any other issues, post it [here](https://github.com/TMJPEngineering/generator-tmj-mean/issues/new) then assign [me](https://github.com/jcmlumacad).

## Credits

- [TMJ Mean Stack Framework](https://github.com/TMJPEngineering/mean-stack-framework)
- [Yeoman](http://yeoman.io/)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/TMJPEngineering/generator-tmj-mean/blob/master/LICENSE) for details

Copyright (c) 2017 [TMJ](http://www.tmj.jp/en/) Philippines