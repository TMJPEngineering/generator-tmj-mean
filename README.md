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
└── modules/
│   ├── auth/
│   │   ├── client/
│   │   │   └── module/
│   │   └── server/
│   │       └── middleware/
│   ├── core/
│   ├── home/
│   ├── shared/
│   └── user/
├── * public/
│   ├── * assets/
│   │   └── * css/
│   └── * dist/
├── resources/
│   ├── assets/
│   └── views/
│       ├── auth/
│       ├── layouts/
│       └── web/
├── tests/
└── vendor/
```

**NOTE:** This *asterisk symbol* shows that it will be generated using `grunt`.

## Credits

- [TMJ Mean Stack Framework](https://github.com/TMJPEngineering/mean-stack-framework)
- [Yeoman](http://yeoman.io/)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/TMJPEngineering/generator-tmj-mean/blob/master/LICENSE) for details

Copyright (c) 2017 [TMJ](http://www.tmj.jp/en/) Philippines