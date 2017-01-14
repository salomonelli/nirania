#!/usr/bin/env bash

SCRIPT="`readlink -e $0`"
SCRIPTPATH="`dirname $SCRIPT`"
echo $SCRIPTPATH

NAME="nirania"
docker stop $NAME
docker rm $NAME
docker rmi $NAME
docker build -t $NAME .
docker run -itd -p 18787:18787 \
--restart=always \
-v $SCRIPTPATH/app:/app \
--name $NAME $NAME
