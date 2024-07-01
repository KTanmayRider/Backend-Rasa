import React, { useState } from "react";
import { Chatbot } from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";

const ChatbotComponent = () => {
  const [showBot, toggleBot] = useState(false);
  return (
    <div className="App">
      <button
        className="app-chatbot-button"
        onClick={() => toggleBot((prev) => !prev)}
      >
        Chat with us!
      </button>
      {showBot && (
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      )}
    </div>
  );
};
export default ChatbotComponent;