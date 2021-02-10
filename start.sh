#!/bin/sh

if [ "$1" = "dev" ]
then
    npm i --prefix ./server/src
    docker-compose -f server-dev.yml up --build
else
    docker-compose -f server.yml up -d --build
fi
