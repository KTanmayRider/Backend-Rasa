


# Chatbot Application

This repository contains the code for a chatbot application using FastAPI for the backend and Rasa for the chatbot model. The backend handles API requests and communicates with the Rasa model to provide responses.

## Folder Structure

```
myproject/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   └── api/
│   │       ├── __init__.py
│   │       └── chatbot.py
│   ├── Dockerfile
│   ├── requirements.txt
│   └── README.md
├── rasa_model/
│   ├── actions.py
│   ├── config.yml
│   ├── credentials.yml
│   ├── domain.yml
│   ├── endpoints.yml
│   ├── nlu.yml
│   ├── stories.yml
│   ├── models/
│   │   ├── <unzipped model files>
│   ├── metadata.json
│   └── README.md
```

## Backend

This folder contains the backend code for the chatbot application using FastAPI. The backend handles API requests and communicates with the Rasa model to provide responses.

### Folder Structure

```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py
│   └── api/
│       ├── __init__.py
│       └── chatbot.py
├── Dockerfile
├── requirements.txt
└── README.md
```

### Files and Their Purpose

#### `app/`

- **`__init__.py`**: Initializes the `app` module.
- **`main.py`**: The main entry point for the FastAPI application. It initializes the FastAPI app and includes the router for the chatbot API.
- **`api/`**
  - **`__init__.py`**: Initializes the `api` module.
  - **`chatbot.py`**: Defines the API endpoint to handle chat messages. It accepts a JSON body, sends the message to the Rasa server, and returns the response.

#### `Dockerfile`

A Dockerfile to containerize the FastAPI application. It sets up a Python environment, installs dependencies, and runs the FastAPI server.

#### `requirements.txt`

A file listing the Python dependencies required for the FastAPI application. These can be installed using:

```bash
pip install -r requirements.txt
```

### How to Run

#### 1. Install Dependencies

Navigate to the `backend` directory and install the dependencies:

```bash
pip install -r requirements.txt
```

#### 2. Run FastAPI Server

Start the FastAPI server using Uvicorn:

```bash
uvicorn app.main:app --reload
```

#### 3. Test API Endpoint

Use a tool like Postman or `curl` to send a POST request to the `/api/chat` endpoint:

##### Using `curl`

```bash
curl -X POST "http://localhost:8000/api/chat" -H "Content-Type: application/json" -d '{"message": "hello"}'
```

##### Using PowerShell

```powershell
Invoke-RestMethod -Method Post -Uri http://localhost:8000/api/chat -Headers @{"Content-Type"="application/json"} -Body '{"message": "hello"}'
```

### Docker Instructions

#### 1. Build Docker Image

Build the Docker image using the provided `Dockerfile`:

```bash
docker build -t my-fastapi-app .
```

#### 2. Run Docker Container

Run the Docker container:

```bash
docker run -p 8000:8000 my-fastapi-app
```

### Summary

This backend is designed to interface with a Rasa chatbot model, handling incoming chat messages and returning appropriate responses from the model. Follow the instructions above to set up, run, and test the backend server.

## Rasa Model

This folder contains the Rasa model and related configuration files for the chatbot application. The Rasa model is used to process user inputs and generate responses.

### Folder Structure

```
rasa_model/
├── actions.py
├── config.yml
├── credentials.yml
├── domain.yml
├── endpoints.yml
├── nlu.yml
├── stories.yml
├── models/
│   ├── <unzipped model files>
├── metadata.json
└── README.md
```

### Files and Their Purpose

#### `actions.py`

Defines custom actions that the Rasa model can use to generate responses. These actions can include API calls, database queries, or any other custom logic.

#### `config.yml`

Configuration file for the Rasa model. It includes pipeline and policies settings that define how the model processes user inputs and manages conversations.

#### `credentials.yml`

Credentials file for connecting to external messaging platforms or services. This file contains authentication details for services like Slack, Facebook Messenger, etc.

#### `domain.yml`

Defines the domain for the Rasa model, including intents, entities, slots, responses, and actions. This file outlines the structure of the conversations the model can handle.

#### `endpoints.yml`

Configuration for connecting to various endpoints like action servers, trackers, and event brokers. This file specifies where Rasa should send and receive data during conversation handling.

#### `nlu.yml`

Contains the training data for the Natural Language Understanding (NLU) component of the Rasa model. This file includes example phrases for different intents and entities.

#### `stories.yml`

Defines the training stories for the Rasa model. These stories are examples of conversations that the model can use to learn how to manage dialogues.

#### `models/`

Directory containing the trained Rasa model files. After training the model, the resulting files are stored in this directory.

#### `metadata.json`

Metadata file containing information about the trained model, such as training time and configuration.

#### `README.md`

This file. Provides an overview of the Rasa model folder, its structure, and the purpose of each file.

### How to Run

1. **Train the Model**:
   ```bash
   rasa train
   ```

2. **Run the Rasa Server**:
   ```bash
   rasa run
   ```

3. **Test the Model**:
   Use Rasa's testing tools to evaluate the model's performance. Create test stories in `tests/test_stories.yml` and run:
   ```bash
   rasa test
   ```

### Summary

This Rasa model is designed to handle chatbot conversations, processing user inputs, and generating appropriate responses based on the defined intents, entities, and stories.

