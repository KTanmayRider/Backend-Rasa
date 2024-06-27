import { createChatBotMessage } from "react-chatbot-kit";
import ActionProvider from "./ActionProvider";
import MessageParser from "./MessageParser";

const config = {
  botName: "GRT Chatbot",
  initialMessages: [createChatBotMessage("Hi, I'm here to help. How can I assist you today?")],
  actionProvider: ActionProvider,
  messageParser: MessageParser,
};

export default config;
