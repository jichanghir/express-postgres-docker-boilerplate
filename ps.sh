#!/bin/sh

if [ "$1" = "dev" ]
then
    docker-compose -f server-dev.yml ps
else
    docker-compose -f server.yml ps
fi
