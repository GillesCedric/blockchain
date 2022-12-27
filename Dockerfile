FROM node:19.3-alpine

# Install Git
RUN apk add --no-cache git

# Clone the Git repository
RUN git clone https://github.com/GillesCedric/blockchain.git blockchain

# Set the working directory
WORKDIR /blockchain

RUN npm install


CMD [ "npm", "start" ]
