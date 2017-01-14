FROM ubuntu:14.04
MAINTAINER Sara Steiert <ssteiert@testo.de>
RUN apt-get update && apt-get upgrade -y
RUN apt-get install wget -y
RUN apt-get install curl -y

## nodejs v 4.0##
RUN cd /usr/local
RUN wget https://nodejs.org/dist/v4.4.7/node-v4.4.7-linux-x64.tar.gz -O nodejs.tar.gz
RUN tar -C /usr/local --strip-components 1 -xzf nodejs.tar.gz
## symlinks
RUN ls -l /usr/local/bin/node
RUN ls -l /usr/local/bin/npm
RUN ln -s `which node` /usr/bin/nodejs

COPY entrypoint.bash /entrypoint.bash
ENTRYPOINT bash entrypoint.bash
