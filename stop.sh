#!/bin/sh

if [ "$1" = "dev" ]
then
    docker-compose -f server-dev.yml down -v
else
    docker-compose -f server.yml down -v
fi

docker ps -aq -f status=exited
docker rmi $(docker images | grep '^<none>' | awk '{print $3}')
