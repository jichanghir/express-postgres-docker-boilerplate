#!/bin/sh

docker-compose -f db.yml up -d --build

if [ "$1" = "dev" ]
then
    npm i --prefix ./server/src
    docker-compose -f server-dev.yml up --build
else
    docker-compose -f server.yml up -d --build
fi
