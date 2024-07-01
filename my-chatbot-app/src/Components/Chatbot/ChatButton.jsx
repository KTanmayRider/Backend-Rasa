// src/components/ChatButton.jsx
import React, { useState } from 'react';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from '../Chatbot/chatbot/config';
import MessageParser from '../Chatbot/chatbot/MessageParser';
import ActionProvider from '../Chatbot/chatbot/ActionProvider';
import '../../assets/CSS/ChatButton.css'; // Import the CSS file for styling
import ChatBotIcon from '../../assets/Images/chatbotGif.gif'

const ChatButton = () => {
  const [showChat, setShowChat] = useState(false);

  const handleButtonClick = () => {
    setShowChat(!showChat);
  };

  return (
    <>
   
    <div className="chat-button" onClick={handleButtonClick}>
        <img className="chatbot-img" src= {ChatBotIcon} alt="Chatbot" />
      </div>
      {showChat && (
        <div className="chatbox">
          <Chatbot config={config} messageParser={MessageParser} actionProvider={ActionProvider} />
        </div>

     
      )}

   
    </>
  );
};

export default ChatButton;