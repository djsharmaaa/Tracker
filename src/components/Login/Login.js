// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = (e) => {
//     e.preventDefault();
//     // Replace with actual authentication logic
//     if (email === "admin@site.com") {
//       navigate('/admin');
//     } else if (email === "driver@site.com") {
//       navigate('/driver');
//     } else if (email === "customer@site.com") {
//       navigate('/customer');
//     } else {
//       alert("Invalid credentials");
//     }
//   };

//   return (
//     <div className="login">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input 
//           type="email" 
//           placeholder="Email" 
//           value={email} 
//           onChange={(e) => setEmail(e.target.value)} 
//           required 
//         />
//         <input 
//           type="password" 
//           placeholder="Password" 
//           value={password} 
//           onChange={(e) => setPassword(e.target.value)} 
//           required 
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError(''); 

    // Replace with actual authentication logic
    if (email === "admin@ddk.com" && password === "admin123") {
      navigate('/admin');
    } else if (email === "driver@ddk.com" && password === "driver123") {
      navigate('/driver');
    } else if (email === "customer@ddk.com" && password === "customer123") {
      navigate('/customer');
    } else {
      setError("Invalid credentials");
      setPassword(''); 
    }
  };

  return (
    <div className="login-container">
      <div className="left-side">
        <img src="/images/DD2.png" alt="Logo" className="logo" />
      </div>

      <div className="right-side">
        <h2>Doordarshan Car Tracking</h2>
        {error && <div className="error-message">{error}</div>}
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
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
