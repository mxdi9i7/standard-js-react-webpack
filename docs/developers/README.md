# Developer Guide

###### Documentation for developers
---


## Table  of content
- [Introduction](#intro)
- [Getting started](#start)
- [Sass](#sass)
- [Dev tools](#devTools)
- [Unit Test](#unitTest)
- [Browser Test](#browserTest)
- [Continuous Integration and deployment](#ci)
- [Code style guide](#codeStyle)

## Introduction

Our client uses NervJS for UI library. NervJS supports IE8 browsers. A more detailed introduction of NervJS can be found [here](https://github.com/NervJS/nerv).

## Getting started

Clone the repo to your working directory. Then navigate into the client directory and install the dependencies by typing:

 ```
yarn
 ```

After the packages are installed, you can then run the application in development mode by typing:

```
yarn dev
```

Then your chat client will spawn on port 8888, you can see it by nagivating to http://localhost:8888 to view the application

## Sass

Our client uses Sass loader to transpile `.scss` files to `.css` files through webpack plugin.

## Dev tools

This project is installed with `nerv-devtools` that works with the chrome plugin: react-dev-tools. This tool contains a Virtual Dom Tree, props and state console to help you more conveniently inspect your code.

The dev tool can be found in the chrome developer view towards the end of the tabs.

## Unit Test
Unit test uses Jest for unit test. Run the following command to initiate the test:

```
yarn test
```

### Test file location
Most of the unit test files will be stored side by side to the code that's being tested so it's easier to locate and the import relative path can be relatively simpler. For example, instead of
```
import HelloComponent from '../../path/to/HelloComponent.js'
```
the path now would be
```
import HelloComponent from './HelloComponent'
```

## Browser Test

## Continuous Integration & Deployment


## <a name="codeStyle"></a> Code style guide
We use [Standard JS](https://standardjs.com/index.html) for coding style guide. There is no configuration required, all you need to do is run
```
yarn lint
```
or
```
standard --fix
```
to automatically lint all your current directory JS files
