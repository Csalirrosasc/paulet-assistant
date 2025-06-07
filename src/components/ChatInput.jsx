import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './ChatBot.css';

const ChatInput = ({ onSend }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    onSend(input);
    setInput('');
  };

  return (
    <div className="chat-input">
      <input
        type="text"
        placeholder="Escribe tu mensaje..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
      />
      <button onClick={handleSend}>
        <FaPaperPlane />
      </button>
    </div>
  );
};

export default ChatInput;
