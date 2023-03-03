# Base image
FROM node:16-alpine3.14

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the working directory
COPY package.json yarn.lock ./

# Install the dependencies
RUN yarn install --frozen-lockfile --non-interactive --cache-folder ./ycache && rm -rf ./ycache

# Copy the rest of the application files to the container
COPY . .

# Build the application
RUN yarn build

# Expose the port on which the application runs
EXPOSE 3000

# Run the application
CMD ["yarn", "start"]
