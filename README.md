This project was created with [NextJS](https://nextjs.org).

## Table of Contents

- [How to Run](#how-to-run)
- [Libraries](#libraries)
- [Must to Know](#must-to-know)
- [How to code](#how-to-code)

## How to Run

* Must TODO
  - disabled all your auto fix linter
  - install Eslint on your code editor (because we use eslint configuration)

* Run with makefile must install npm
  - `$ make run_setup` this script will running npm install and copy your env
  - `$ make run_local` this script will running hot reload in local
  - `$ make run_lint` this script will running eslint to check your code
  - `$ make run_docker` this script will build docker image and run the container on port 3001

## Libraries

* UI framework with Ant Design.
* Environment variable with dotenv
* Css framework with sass
* HTTP request with Axios
* Formater datetime with Day.js

## Must to Know

* All code must write in functional component (react hook) because functional component are much easier to read and test
* Don't ever import lodash, just use javascript instead ([why](https://codeburst.io/why-you-shouldnt-use-lodash-anymore-and-use-pure-javascript-instead-c397df51a66)).
* Use permanent version package
* Use ES6

## How to code

* import
  - TestImport => for importing with render html
  - testImport => for importing just function

* configs
  - configs is used for make some function with using third-party library
  - use dash for writing your configs file, ex: test-configs.js
  - list of configs:
    - firebase: contain function for firebase package

* utils
  - utils is used for make some function with not using third-party library
  - use dash for writing your utils file, ex: test-utils.js
  - list of utils:
    - api: contain handling for hit api
    - api-url: contain of list api
    - constant: contain of constant that will used for this project
    - datetime: contain function for formater date and time
    - validator: contain function for validate form
