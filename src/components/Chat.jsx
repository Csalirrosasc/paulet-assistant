import { useState } from 'react';
import './Chat.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'Tu', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    try {
      const response = await fetch('http://127.0.0.1:8000/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await response.json();

      const botMessage = { sender: 'Paulet ', text: data.response };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { sender: 'Error', text: 'No se pudo conectar con el backend.' }]);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="chat-container">
      <div className="chat-box">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender === 'Tu' ? 'user' : 'bot'}`}>
            <strong>{msg.sender}:</strong>
            <span> {msg.text}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        placeholder="Escribe tu mensaje..."
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button onClick={sendMessage}>Enviar</button>
    </div>
  );
}

export default Chat;
