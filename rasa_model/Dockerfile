# Use the official Rasa image from the Docker Hub
FROM rasa/rasa:latest

# Copy the project files into the container
COPY . /app

# Set the working directory in the container
WORKDIR /app

# Command to run Rasa
CMD ["run", "--enable-api", "--cors", "*"]
