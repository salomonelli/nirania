FROM ubuntu:14.04
MAINTAINER Sara Steiert <ssteiert@testo.de>
RUN apt-get update && apt-get upgrade -y
RUN apt-get install wget -y
RUN apt-get install curl -y

#install nodejs and npm
RUN curl -sL https://deb.nodesource.com/setup_6.x | sudo -E bash -
RUN apt-get install -y nodejs

COPY entrypoint.bash /entrypoint.bash
ENTRYPOINT bash entrypoint.bash
