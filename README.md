# Dockerized Node.js and SQLite Application

This project containerizes a simple Node.js web application with an SQLite database using Docker and Docker Compose.

## Project Overview

The application serves an endpoint (`/data`) that retrieves a message from an SQLite database and serves it as JSON.

## Prerequisites

- Docker
- Docker Compose

## Steps to Reproduce

1. Clone the repository:
   \`\`\`bash
   git clone <repository-url>
   cd <repository-folder>
   \`\`\`

2. Build and run the containers:
   \`\`\`bash
   docker-compose up --build
   \`\`\`

3. Access the application:
    - API Endpoint: `http://localhost:3000/data`

   The API will return:
   \`\`\`json
   {
   \"message\": \"Hello from SQLite\"
   }
   \`\`\`

4. Stop the application:
   \`\`\`bash
   docker-compose down
   \`\`\`

5. Monitoring:
    - Use the following command to view container resource usage:
      \`\`\`bash
      docker stats
      \`\`\`

## Application Overview

- **/data**: This endpoint retrieves a message from the SQLite database and serves it as JSON.

## Docker Compose Overview

- The application is run inside a container using Docker Compose.
- A custom network (`app-network`) is used to isolate the application.
- Volumes are used to mount the source code into the container for easy development.
- Resource limits are set on memory (256MB) and CPU (0.50 cores) to ensure efficient use of resources.

## Further Improvements

- This setup is for a development environment and uses an SQLite database. For production, consider using a more robust database like PostgreSQL or MySQL.
