# lft-concept-api
Standalone API template


List docker containers currently running on your machine

```sh
docker ps
```

Obtain the docker id of your container, and use this command with the `{containerid}` to stop the conatiner running. You may need to do this from another shell window. If the docker container won't stop, then you may have to use the kill

```sh
docker stop `{containerid}`
```