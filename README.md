# lft-concept-api
Standalone API template

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