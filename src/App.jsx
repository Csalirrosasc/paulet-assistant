import React, { useState } from 'react';
import ChatBot from './components/ChatBot';
import LoginPage from './components/LoginPage';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  const handleLoginSuccess = (data) => {
    setIsAuthenticated(true);
    setUserData(data);
  };

  return (
    <div className="App">
      {isAuthenticated ? <ChatBot userData={userData} /> : <LoginPage onLoginSuccess={handleLoginSuccess} />}
    </div>
  );
}

export default App;