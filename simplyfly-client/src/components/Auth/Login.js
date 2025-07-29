import React, { useState } from 'react';
import './Login.css';  
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('passenger');  
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        email,
        password,
        role
      });

      
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', role);

      
      const redirectPath = localStorage.getItem('redirectAfterLogin');
      localStorage.removeItem('redirectAfterLogin');

      if (redirectPath) {
        navigate(redirectPath);
      } else {
        
        if (role === 'passenger') navigate('/user/dashboard');
        else if (role === 'flightOwner') navigate('/owner/dashboard');
        else if (role === 'admin') navigate('/admin/dashboard');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('Invalid email or password');
      } else {
        alert('Login failed. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <h2>Login to SimplyFly</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select value={role} onChange={(e) => setRole(e.target.value)} required>
          <option value="passenger">Passenger</option>
          <option value="flightOwner">Flight Owner</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
