import React, { useState, useRef, useEffect } from 'react';
import './ChatBot.css';
import paulet_avatar from '../assets/paulet-avatar.png';

const avatar = paulet_avatar;

const ChatBot = ({ userData }) => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ from: 'bot', text: `¡Hola ${userData?.nombre || ', bienvenido'}! ¿En qué puedo ayudarte hoy?` }]);
  const chatBodyRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { from: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    try {
      const res = await fetch('https://paulet-assistant.fly.dev/paulet/chat', {
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
    } finally { setIsTyping(false); };
  };

  return (
    <div className="chatbot-fullscreen">
      <div className="chat-window">
        <div className="chat-header">
          <img className='avatar-header' src={avatar} alt="Avatar" />
          <span>Asistente PAULET</span>
          {userData?.nombre && <span className="user-badge">Bienvenido, {userData.nombre}</span>}
        </div>
        <div className="chat-body" ref={chatBodyRef}>
          {messages.map((msg, i) => (
            <div key={i} className={`message ${msg.from}`}>{msg.text}</div>
          ))}
          {isTyping && (
            <div className="message bot typing">
              Escribiendo<span className="dots">
                <span>.</span><span>.</span><span>.</span>
              </span>
            </div>
          )}
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
