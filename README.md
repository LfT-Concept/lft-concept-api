# lft-concept-api
Standalone API template

[![Build Status](https://travis-ci.org/LfT-Concept/lft-concept-api.svg?branch=master)](https://travis-ci.org/LfT-Concept/lft-concept-api)

## Set Up

### Starting from scratch

Using VSCode, in the terminal window, at the default command. Navigate to normal root folder for code projects. Make a new folder with the project name. Navigate to the new folder, and open (reuse) the VSCode editor window for the new project. And finally in the first step, initialise for git project.

```sh
    cd {code-folder}
    mkdir {project-name}
    cd {project-name}
    code . -r
    git init
```

### Alternative (option 2) way to start project

Create new repo in github first, indicating that project will be Node based (and should include node .gitignore) and a README.md file. Then get clone command copied to clipboard. Now from terminal window in VSCode.

```sh
    cd {code-folder}
    git clone {clipboard-github-project}
    cd (project-name)
    code . -r
```

### Add starting files

Add the started starting files. After each one is created, hit save file (or wait till all created and save all). If option 2 was chosen to start the project, then only the 3rd and 4th files listed need to be added.

```sh
    touch README.md
    touch .gitignore
    touch app.js
    touch Dockerfile
```

#### README.md

Include as much useful information to get a user up and running with the project, and to understand the purpose, etc.

#### .gitignore

If this file was created in GitHub repo creation, then it will be prepopulated. Otherwise you'll need to copy in contents from {gitignore-reference}.

#### app.js

Creating a simple server with no dependencies.

#### Dockerfile

At the initial stage, this only requires three simple lines. Enough to create a node based unix container, copy the relevant files, and run the primary code.

```docker
FROM node:alpine
COPY ./ ./
CMD [ "node", "app.js" ]
```

### Running the application

This simple project is intended to be run from docker. In the terminal window, we first need to build the project.

```sh
docker build .
```

This will build a container with the code and set the command to action when the container is run. The output from the build will return a container id. This allows us to run the container, but we need to expose the port to our local environment.

```sh
docker run -p `{exposed-port}:{container-port}` `{container-id}`
```

List docker containers currently running on your machine

```sh
docker ps
```

Obtain the docker id of your container, and use this command with the `{containerid}` to stop the conatiner running. You may need to do this from another shell window. If the docker container won't stop, then you may have to use the kill

```sh
docker stop `{containerid}`
```

### Adding npm

Node Package Manager (npm) will be used to install dev and production dependencies as we proceed, so although it isn't required at this minimalist stage, it needs to be installed.

```sh
npm init
```

You are then prompted for a number of answers, most of which give default options in brackets which you can just hit return to agree with.

```sh
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg> --save` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
name: (lft-concept-api) lft-concept-api
version: (1.0.0) 1.0.0
description: Standalone API template
entry point: (app.js)
test command:
git repository: (https://github.com/LfT-Concept/lft-concept-api.git)
keywords: lftconcept,api
author: lft-concept
license: (ISC)
```

And then one final display of JSON file that it will create as package.json, and a question 'is that ok? (yes)' Hit return to agree.

### Remeber to add a start script

The default script that is created in the package.json is for 'test'. Bizarrely, despite asking what is the entry point, it doesn't create a start script automatically. In this case we need to add one, so that the updated 'script' node looks like this.

```json
  "scripts": {
    "start": "node app.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

### Update to Dockerfile

Now that we have installed npm, we need the docker container to reflect this. The first is to change the default command to run npm start. We also want to create a working directory, move package.json over on its own so that we can run npm install, and cache this state. And finally we leave the copy of the rest of the files to occur after.

```docker
# Specify a base image
FROM node:alpine

WORKDIR /usr/app

# Install dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# Default command
CMD [ "npm", "start" ]
```

### Add test and test framework

One thing we want to inject early is a test framework. There are somne good posts on testing nodejs, including best practices, and links are included here:

- [Node.js & JavaScript Testing Best Practices][njstbp] by Yoni Goldberg
- [Unit Testing and TDD in Node.js][uttddnjs] by David Tang
- [Learn Node.js, Unit 9: Unit testing the IBM way][lnjsut] by J Steven Perry

Our chosen framework will be [Mocha][mocha]. Why? Well it seems to have won the defacto testing framework award for nodejs, and who are we to argue. Most articles seem to indicate installing flobally, but this is not required. Just install for dev in the project.

```sh
npm install --save-dev mocha
```

To validate that it is working, we can easily add a new test.js file in a new test folder. The basic test (not testing existing functionality yet), will just runs its own logic.

```test
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});
```

Back in the terminal to run this

```sh
./node_modules/mocha/bin/mocha
```

And should return the results

```sh
  Array
    #indexOf()
      ✓ should return -1 when the value is not present
```

### Run tests from script

That's way too complicated to remeber everytime we want to run tests, so instead we add a script. Replace the existign test script to run mocha.

```sh
  "scripts": {
    "start": "node app.js",
    "test": "mocha"
  },
```

And to execute them

```sh
npm run test
```

Result is the same as before when running the long winded way

### References

[njstbp]: <https://medium.com/@me_37286/yoni-goldberg-javascript-nodejs-testing-best-practices-2b98924c9347>
[uttddnjs]: <https://www.codementor.io/davidtang/unit-testing-and-tdd-in-node-js-part-1-8t714s877>
[lnjsut]: <https://developer.ibm.com/tutorials/learn-nodejs-unit-testing-in-nodejs/>
[mocha]: <https://mochajs.org/>
