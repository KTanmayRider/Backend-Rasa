# My Project

This repository contains a complete setup for a chatbot using Rasa for natural language understanding, FastAPI for backend services, and a React frontend built with Vite.

## Directory Structure

```
myproject/
├── backend/
│   ├── app/
│   │   ├── __init__.py
│   │   ├── main.py
│   │   ├── api/
│   │   │   ├── __init__.py
│   │   │   └── chatbot.py
│   ├── venv/
│   │   ├── ... (virtual environment files)
│   ├── Dockerfile
│   └── requirements.txt
├── my-chatbot-app/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Chatbot.jsx
│   │   │   ├── ActionProvider.js
│   │   │   ├── MessageParser.js
│   │   │   └── config.js
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   ├── main.jsx
│   ├── .eslintrc.cjs
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── vite.config.js
└── rasa_model/
    ├── models/
    │   ├── domain_provider/
    │   ├── finetuning_validator/
    │   ├── train_CountVectorsFeaturizer3/
    │   ├── train_CountVectorsFeaturizer4/
    │   ├── train_DIETClassifier5/
    │   ├── train_LexicalSyntacticFeaturizer2/
    │   ├── train_MemoizationPolicy0/
    │   ├── train_RegexFeaturizer1/
    │   ├── train_RulePolicy2/
    │   └── train_TEDPolicy1/
    ├── actions.py
    ├── config.yml
    ├── credentials.yml
    ├── domain.yml
    ├── endpoints.yml
    ├── metadata.json
    └── nlu.yml
```

## Setup Instructions

### Backend Setup

1. **Navigate to the backend directory**:
    ```bash
    cd backend
    ```

2. **Create and activate a virtual environment**:
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```

3. **Install the dependencies**:
    ```bash
    pip install -r requirements.txt
    ```

4. **Run the FastAPI server**:
    ```bash
    uvicorn app.main:app --reload
    ```

### Rasa Model Setup

1. **Navigate to the Rasa model directory**:
    ```bash
    cd rasa_model
    ```

2. **Install Rasa and necessary dependencies**:
    ```bash
    pip install rasa
    pip install transformers torch  # For using pre-trained models like BERT
    ```

3. **Train the Rasa model**:
    ```bash
    rasa train
    ```

4. **Run the Rasa server**:
    ```bash
    rasa run --enable-api --cors "*"
    ```

### Frontend Setup

1. **Navigate to the frontend directory**:
    ```bash
    cd my-chatbot-app
    ```

2. **Install the dependencies**:
    ```bash
    npm install
    ```

3. **Start the development server**:
    ```bash
    npm run dev
    ```

### Integrate Frontend with Backend

1. **Update `src/ActionProvider.js` in the frontend**:
    ```javascript
    class ActionProvider {
      constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
      }

      async handleMessage(message) {
        const responseMessage = this.createChatBotMessage("Thank you for your message!");

        this.setState((prevState) => ({
          ...prevState,
          messages: [...prevState.messages, responseMessage],
        }));

        try {
          const response = await fetch("http://localhost:8000/api/chat", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message }),
          });

          if (!response.ok) {
            throw new Error("Failed to communicate with the backend");
          }

          const data = await response.json();
          const rasaMessages = data.map((msg) => this.createChatBotMessage(msg.text));

          this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, ...rasaMessages],
          }));
        } catch (error) {
          console.error("Error communicating with backend:", error);
          const errorMessage = this.createChatBotMessage("Sorry, there was an error processing your message. Please try again later.");
          this.setState((prevState) => ({
            ...prevState,
            messages: [...prevState.messages, errorMessage],
          }));
        }
      }
    }

    export default ActionProvider;
    ```

### Running the Entire Application

1. **Ensure the Rasa server is running**:
    ```bash
    rasa run --enable-api --cors "*"
    ```

2. **Ensure the FastAPI backend is running**:
    ```bash
    uvicorn app.main:app --reload
    ```

3. **Ensure the React frontend is running**:
    ```bash
    npm run dev
    ```

4. **Open your browser and navigate to**:
    ```bash
    http://localhost:3000
    ```

By following these instructions, you should be able to set up and run the entire application smoothly. If you encounter any issues, please refer to the respective documentation or raise an issue in the repository.