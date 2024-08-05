import { useState } from 'react';

const Login = () => {
  const [token, setToken] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });
    if (response.ok) {
      // Handle successful login and redirect to the cameras page
      window.location.href = '/cameras';
    } else {
      // Handle login failure
      alert('Login failed. Please check your token.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Personal Access Token:
        <input type="text" value={token} onChange={(e) => setToken(e.target.value)} required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
