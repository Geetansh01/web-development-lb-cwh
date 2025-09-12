# "ubuntu" is the base image (present on hub.docker.com)
FROM ubuntu

# So. in the base image, we have an OS (ubuntu), now we will install nodeJS on top of it
# These commands will run inside the container
RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs

# copy files from your directory -> container
# Format COPY  <source- file name from your directory> <destination- file name inside the container>
# Since we did not specify a proper path, these files will go to root inside the container: "/package.json"
COPY package.json package.json
COPY package-lock.json package-lock.json
COPY main.js main.js

RUN npm install

# Entrypoint Means → whenever you run the container, Docker will execute: node main.js
ENTRYPOINT [ "node", "main.js" ]

# Note:
# Since we used an ubuntu image, we had to install nodeJS on it. 
# Had we used a node image instead, we would have saved that effort (node image = ubuntu + node already!). Then the code would be:

    # FROM ubuntu

    # COPY package.json package.json
    # COPY package-lock.json package-lock.json
    # COPY main.js main.js

    # RUN npm install

    # ENTRYPOINT [ "node", "main.js" ]


# So, choose your base images wisely.