#!/bin/bash

if [ -z "$1" ]
  then
    echo "Docker starts for production";
    docker-compose up;
fi

echo "Docker starts for development";
docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up --build;
