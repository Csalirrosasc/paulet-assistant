import React from 'react';
import { FaRobot } from 'react-icons/fa';
import './ChatBot.css';

const ChatHeader = () => {
  return (
    <div className="chatbot-header">
      <FaRobot className="bot-icon" />
      <h2>Paulet Assistant</h2>
    </div>
  );
};

export default ChatHeader;
