class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  async handleMessage(message) {
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
