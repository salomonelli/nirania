NAME="nirania"
CWD=$(pwd)
docker stop $NAME
docker rm $NAME
docker rmi --force $NAME
docker build -t $NAME .
docker run -it -p 80:80 \
-v $CWD/app:/app \
--name $NAME $NAME
