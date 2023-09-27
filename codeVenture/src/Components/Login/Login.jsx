import React, { useState } from 'react';

function Login({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // per l'autenticazione
      onLogin(); 
    } catch (error) {
      
      console.error(error);
    }
  };

  const handleSignUp = async () => {
    try {
      // per la registrazione
      onLogin(); 
    } catch (error) {
      
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Login o Registrazione</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button >Accedi</button>
      <button >Registrati</button>
    </div>
  );
}

export default Login;

