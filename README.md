# Node Rapid Starter

This is a very simple boilerplate for a Typescript Node application.  It is simple enough not to
stand in your way, but has enough to get you going.

## Get started
#### To install:
```
npm install
```

#### To run a development environment:

First get a local MongoDB instance running:
```
mongod
```

Then run the application
```
npm dev
```
Go to localhost:3000 for the API

Go to localhost:3000/swagger for the Swagger interface

#### To build and run for production:
```
npm build
```
```
npm start
```

## What's included?
* [Node.js](https://nodejs.org/).
* [Typescript](https://www.typescriptlang.org/) for type safety.
* [koa](https://koajs.com/) for the web server.
* [Swagger](https://swagger.io/) for API documentation.
* [MongoDB](https://www.mongodb.com/) and [mongoose](https://mongoosejs.com/) for the database.
* [Jest](https://jestjs.io/) for testing.
* [Eslint](https://eslint.org/) for linting.

## Structure
The structure of the program follows (mostly) a Domain Driven Design ([DDD](https://en.wikipedia.org/wiki/Domain-driven_design)).

* The **/src/core** files contains all the business logic.  It is not dependant of anything.  Any modules must be injected into it (defined by its own interfaces).
* **/src/core/interfaces** defines all the interfaces that needs to be implemented.
* **/src/core/entities** contains all the business models.

Since the core implementation does not import (for example) its repo directly, it is very easy
to switch out the db layer, or mock one.  *See **/src/repo/__tests__**.*

**/src/setup.js** is where all the magic happens - it is where all the "dependency injection" happens.

## Other things
* The code works well with VSCode.  *See **.vscode**.*
* This project is by no means intended to be "complete".  A real world application will have:
   * Real security.
   * Not just one (useless) test.
   * Model validations.
   * A deeper folder structure, i.e. **/src/core/interfaces/repo.interfaces.ts** will be subdivided into other files and folders.

