# TMJ Mean Stack Framework

Mean Stack Framework Generator using Yeoman

## Getting Started

You will need to install `yeoman` using `npm`. Be sure to have [NodeJS](https://nodejs.org/en/download/) installed before doing it so.

```{r, engine='sh'}
npm install yo -g
```

### Global

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