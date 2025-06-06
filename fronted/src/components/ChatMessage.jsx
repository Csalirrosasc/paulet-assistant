import React from 'react';
import './ChatBot.css';

const ChatMessage = ({ sender, text }) => {
  return (
    <div className={`chat-message ${sender}`}>
      <div className="message-bubble">
        {text}
      </div>
    </div>
  );
};

export default ChatMessage;
