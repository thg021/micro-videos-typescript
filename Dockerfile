FROM node:14.15.4-slim

RUN apt update && apt install -y --no-install-recommends \
    ssh-client \
    git \ 
    ca-certificates
    

USER node

WORKDIR /home/node/app

###CMD [ "tail", "-f", "/dev/null" ]
CMD [ "sh", "-c", "npm install && tail -f /dev/null"]