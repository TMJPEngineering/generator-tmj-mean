# TMJ Mean Stack Framework
[![npm version](https://img.shields.io/npm/v/generator-tmj-mean.svg)](https://www.npmjs.org/package/generator-tmj-mean)

Mean Stack Framework Generator using Yeoman

## Getting Started

You will need to install `yeoman` using `npm`. Be sure to have [NodeJS](https://nodejs.org/en/download/) installed before doing it so.

```{r, engine='sh'}
npm install yo -g
```

### Locally

You need to download or clone this to a new project locally name it `generator-tmj-mean`. Then run it in git shell.

```{r, engine='sh'}
git clone https://github.com/TMJPEngineering/generator-tmj-mean.git > generator-tmj-mean
```

Go to the root directory of this project, then type:

```{r, engine='sh'}
npm link
```

That will install this generator dependencies and symlink a global module to your local file. After `npm` is done your good to go to your project.

### Globally

Or if you don't want to download or clone this, you can install it using `npm`:

```{r, engine='sh'}
npm install -g generator-tmj-mean
```

## Usage

In your project, you can create a mean stack framework.

```{r, engine='sh'}
yo tmj-mean
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
├── public/
├── resources/
│   ├── assets/
│   └── views/
│       ├── auth/
│       ├── layouts/
│       └── web/
├── tests/
└── vendor/
```

## Credits

- [TMJ Mean Stack Framework](https://github.com/TMJPEngineering/mean-stack-framework)
- [Yeoman](http://yeoman.io/)

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/TMJPEngineering/generator-tmj-mean/blob/master/LICENSE) for details

Copyright (c) 2017 [TMJ](http://www.tmj.jp/en/) Philippines