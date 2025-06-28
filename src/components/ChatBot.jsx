import React, { useState } from 'react';
import './ChatBot.css';
import paulet_avatar from '../assets/paulet-avatar.png';

const avatar = paulet_avatar;

const ChatBot = ({ userData }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ from: 'bot', text: `¡Hola ${userData?.nombre || ', bienvenido'}! ¿En qué puedo ayudarte hoy?` }]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const res = await fetch('http://127.0.0.1:8000/paulet/chat', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Authorization': userData?.token ? `Bearer ${userData.token}` : ''
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMessage = { from: 'bot', text: data.respuesta };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [...prev, { from: 'bot', text: 'Hubo un error. Intenta más tarde.' }]);
    }
  };

  return (
    <div className="chatbot-fullscreen">
      <div className="chat-window">
        <div className="chat-header">
          <img className='avatar-header' src={avatar} alt="Avatar" />
          <span>Paulet Assistant</span>
          {userData?.nombre && <span className="user-badge">Bienvenido, {userData.nombre}</span>}
        </div>
        <div className="chat-body">
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.from}`}>{msg.text}</div>
          ))}
        </div>
        <div className="chat-footer">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Escribe tu mensaje..."
          />
          <button onClick={handleSend}>Enviar</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
