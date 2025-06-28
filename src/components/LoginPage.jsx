import { useState } from 'react';
import './LoginPage.css';
import paulet_avatar from '../assets/paulet-avatar.png';

const LoginPage = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!username.trim() || !password.trim()) {
      setError('Por favor, completa todos los campos');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('http://127.0.0.1:8000/paulet/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      });

      const data = await response.json();

      if (response.ok) {
        onLoginSuccess(data);
      } else {
        setError(data.detail || 'Usuario o contraseña incorrectos');
      }
    } catch (err) {
      setError('Error de conexión. Intenta nuevamente.');
      console.error('Error de login:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <img src={paulet_avatar} alt="Paulet Avatar" className="login-avatar" />
          <h1>Paulet Assistant</h1>
        </div>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Usuario</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Ingresa tu usuario"
              disabled={isLoading}
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Contraseña</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingresa tu contraseña"
              disabled={isLoading}
            />
          </div>
          
          <button 
            type="submit" 
            className="login-button" 
            disabled={isLoading}
          >
            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
