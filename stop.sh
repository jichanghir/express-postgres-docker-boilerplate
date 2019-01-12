#!/bin/sh

docker-compose -f db.yml down -v

if [ "$1" = "dev" ]
then
    docker-compose -f server-dev.yml down -v
else
    docker-compose -f server.yml down -v
fi
