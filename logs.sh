#!/bin/sh

if [ "$1" = "dev" ]
then
    docker-compose -f server-dev.yml logs
else
    docker-compose -f server.yml logs
fi
