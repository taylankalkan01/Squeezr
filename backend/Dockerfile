FROM node:14 as build

# Create the app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Compile TypeScript files
RUN npm run build

# Create a new image with a smaller base image
FROM node:14-alpine

# Set the working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the previous image
COPY --from=build /usr/src/app/dist /usr/src/app
COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules

# Expose the port the app will run on
EXPOSE 3001

# Start the app
CMD [ "npm", "start" ]
