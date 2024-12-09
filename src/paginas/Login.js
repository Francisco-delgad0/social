import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

function Login({ setIsAuthenticated }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [registerUsername, setRegisterUsername] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/Login', { username, password });
      setIsAuthenticated(true); 
      navigate('/Prueba');
    } catch (err) {
      setError(t('sesionerror'));
    }
  };

 
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/register', { username: registerUsername, password: registerPassword });
      setSuccessMessage(t('registrosuccess'));
      setRegisterUsername('');
      setRegisterPassword('');
      setError(null);
    } catch (err) {
      setError(t('registroerror'));
      setSuccessMessage(null); 
    }
  };

return (
  <div className="auth-container">
    <div className="auth-section login-section">
      <h2>{t('sesionstart')}</h2>
      {error && <p className="auth-error">{error}</p>}
      <form onSubmit={handleLogin} className="auth-form">
        <div className="input-group">
          <input
            type="text"
            placeholder={t('accountfields.username')}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder={t('accountfields.password')}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="auth-button">
          {t('sesionstart')}
        </button>
      </form>
    </div>

    <div className="auth-section register-section">
      <h2>{t('userregistration')}</h2>
      {successMessage && <p className="auth-success">{successMessage}</p>}
      {error && <p className="auth-error">{error}</p>}
      <form onSubmit={handleRegister} className="auth-form">
        <div className="input-group">
          <input
            type="text"
            placeholder={t('accountfields.newusername')}
            value={registerUsername}
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
        </div>
        <div className="input-group">
          <input
            type="password"
            placeholder={t('accountfields.newpassword')}
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="auth-button">
          {t('registro')}
        </button>
      </form>
    </div>
  </div>
);

}

export default Login;
