# GovTech CFT+ Assignment (Timothy Chang)

This project consists of a React frontend and an Express backend, containerized using Docker. This README provides detailed instructions on how to set up and run the application locally, as well as how to build and deploy Docker images.


https://github.com/user-attachments/assets/77a35a0e-6900-4741-9cf9-6900fc7fe786



## Features

- **Input Validation**: The application includes robust input validation to ensure that user inputs are correct and within expected ranges.
- **Reset Function**: A reset function is available to clear all inputs and results in the application.
- **Local Storage Persistence**: User inputs and application state are persisted in local storage, allowing for data retention across sessions.
- **Unit Testing**: Comprehensive unit tests are implemented using Jest and React Testing Library with an extensive list of test cases, ensuring that individual components and functionalities work as expected.
- **Error Handling**: Proper error handling mechanisms are in place to manage and display errors effectively.
- **Responsive Design**: The frontend is designed to be responsive, providing a good user experience on various devices.
- **Docker Integration**: Docker is used for containerizing the application, ensuring consistency across different environments.
- **API Integration**: The frontend communicates with the backend via RESTful APIs, making it easy to extend and integrate with other services.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Project Structure](#project-structure)
3. [Setup and Installation](#setup-and-installation)
   - [Frontend](#frontend)
   - [Backend](#backend)
4. [Running Locally](#running-locally)
   - [Frontend](#frontend)
   - [Backend](#backend)
5. [Docker Setup](#docker-setup)
   - [Building Docker Images](#building-docker-images)
   - [Running Docker Containers](#running-docker-containers)
6. [Testing Coverage](#testing-coverage)
7. [Lessons Learned](#lessons-learned)
8. [Troubleshooting](#troubleshooting)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [Docker](https://www.docker.com/) and [Docker Compose](https://docs.docker.com/compose/install/) (for containerization)
- [Git](https://git-scm.com/) (for version control)

## Project Structure

The project structure is as follows:

```
/project-root
├── /client                # React frontend
│   ├── /public
│   ├── /src
│   ├── Dockerfile
│   └── package.json
├── /server                # Express backend
│   ├── /src
│   ├── Dockerfile
│   └── package.json
├── docker-compose.yml     # Docker Compose configuration
└── README.md              # This file
```

## Setup and Installation

### Frontend

1. **Navigate to the frontend directory:**

   ```bash
   cd client
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the frontend application:**

   ```bash
   npm start
   ```

   The frontend will be available at `http://localhost:3000`.

### Backend

1. **Navigate to the backend directory:**

   ```bash
   cd server
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start the backend application:**

   ```bash
   npm start
   ```

   The backend will be available at `http://localhost:5000`.

## Running Locally

To run both the frontend and backend locally, follow these steps:

1. **Start the backend:**

   Open a terminal and navigate to the `server` directory, then run:

   ```bash
   npm start
   ```

2. **Start the frontend:**

   Open another terminal and navigate to the `client` directory, then run:

   ```bash
   npm start
   ```

   The frontend will communicate with the backend at `http://localhost:5000`.

## Docker Setup

### Building Docker Images

To build Docker images for both the frontend and backend:

1. **Navigate to the project root directory:**

   ```bash
   cd .
   ```

2. **Build Docker images:**

   ```bash
   docker-compose build
   ```

### Running Docker Containers

To run the application using Docker Compose:

1. **Start Docker containers:**

   ```bash
   docker-compose up
   ```

   This will start both the frontend and backend containers. The frontend will be available at `http://localhost:3000`, and the backend at `http://localhost:5000`.

2. **Stop Docker containers:**

   To stop the containers, press `Ctrl+C` in the terminal where Docker Compose is running, and then run:

   ```bash
   docker-compose down
   ```

## Testing Coverage

1. **Navigate to the frontend directory:**

   ```bash
   cd client
   ```

2. **Run unit tests:**

   ```bash
   npm test
   ```

   This will execute the tests using Jest and React Testing Library. Test coverage reports can be found in the `coverage` directory.
   
![2024-08-31 21 10 42](https://github.com/user-attachments/assets/1509a936-3053-4431-80ad-fb17665670f4)


## Lessons Learned

- **Docker and Containerization**: Gained practical experience in containerizing applications using Docker and Docker Compose. Understanding how to build and manage multi-container applications.
- **Frontend and Backend Integration**: Improved skills in integrating a React frontend with an Express backend through RESTful APIs.
- **Error Handling**: Implemented and managed error handling across different layers of the application to ensure robust and user-friendly error reporting.
- **Testing and Coverage**: Developed and maintained unit tests for application, ensuring high code quality and reliability.
- **Deployment and Configuration**: Gained insights into deploying Dockerized applications on various platforms and configuring environment variables for seamless integration.

## Troubleshooting

- **Docker Compose Command Not Found:**
  Ensure Docker Compose is installed and added to your system's PATH.

- **Module Not Found Errors:**
  Verify the paths in your Dockerfile and that all necessary files are included in your Docker images.

- **Application Not Starting:**
  Check the logs using `docker-compose logs` to diagnose and fix issues.

If you encounter issues not covered here, consult the [Docker documentation](https://docs.docker.com/) or the documentation for the deployment platform you are using.

---

For any questions or contributions, feel free to open an issue or pull request on the [GitHub repository](https://github.com/your-repo) or contact me at timothychangke@gmail.com
