import React, { useState } from 'react';

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin(username, password);
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Change height to 100vh
      background: "url('https://i.pinimg.com/originals/09/05/a7/0905a74092fa43fce6218aa48f6a26a4.jpg') no-repeat",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundColor: '#00ebdb',
      animation: 'animateBg 1s linear infinite, changeColor 1s infinite alternate'
    }}>
      <div style={{
        position: 'relative',
        width: '450px',
        height: '550px',
        background: 'transparent',
        borderRadius: '20px',
        border: '2px solid rgba(255, 0, 0, 0.349)',
        display: 'flex',
        flexDirection: 'column', // Change to column layout
        justifyContent: 'center',
        alignItems: 'center',
        backdropFilter: 'blur(15px)'
      }}>
        <form onSubmit={handleLogin}>
          <h2 style={{
            fontSize: '2em',
            color: '#1d53d1',
            textAlign: 'center',
            marginBottom: '10px' // Add some margin below the heading
          }}>Welcome to Work Wave,</h2>
          <h2 style={{ // New h2 for "Login" text
            fontSize: '2em',
            color: '#1d53d1',
            textAlign: 'center'
          }}>Login</h2>
          <div style={{
            position: 'relative',
            width: '310px',
            margin: '70px 0',
            borderBottom: '1px solid #1d53d1'
          }} className="input-box">
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              onFocus={() => setUsername('')}
              onBlur={() => !username && setUsername('Username')}
              style={{
                width: '150%',
                height: '40px',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: '1em',
                color: '#1d53d1',
                padding: '0 35px 0 5px',
                transition: 'transform 0.5s ease',
                transform: username ? 'translateY(-20px)' : 'translateY(0)'
              }}
            />
            <label style={{
              position: 'absolute',
              top: username ? '-20px' : '50%',
              left: '4px',
              fontSize: '1em',
              color: '#1d53d1',
              pointerEvents: 'none',
              transition: 'transform 0.5s ease',
              transform: username ? 'translateY(-20px)' : 'translateY(-50%)'
            }}>Username</label>
          </div>
          <div style={{
            position: 'relative',
            width: '310px',
            margin: '50px 0',
            borderBottom: '1px solid #1d53d1'
          }} className="input-box">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPassword('')}
              onBlur={() => !password && setPassword('Password')}
              style={{
                width: '150%',
                height: '50px',
                background: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: '1em',
                color: '#1d53d1',
                padding: '0 35px 0 5px',
                transition: 'transform 0.5s ease',
                transform: password ? 'translateY(-20px)' : 'translateY(0)'
              }}
            />
            <label style={{
              position: 'absolute',
              top: password ? '-20px' : '50%',
              left: '4px',
              fontSize: '1em',
              color: '#1d53d1',
              pointerEvents: 'none',
              transition: 'transform 0.5s ease',
              transform: password ? 'translateY(-20px)' : 'translateY(-50%)'
            }}>Password</label>
          </div>
          <button type="submit" style={{
            width: '100%',
            height: '50px',
            backgroundColor: '#000',
            border: '1px dashed aqua',
            borderRadius: '40px',
            cursor: 'pointer',
            fontSize: '1em',
            color: '#66fcf1',
            fontWeight: '500'
          }}>Login To  the Bank</button>
          <div style={{
            margin: '15px 0 15px',
            fontSize: '.9em',
            color: '#1d53d1',
            display: 'flex',
            justifyContent: 'space-between'
          }} className="remember-forgot">
            <label style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" style={{ marginRight: '13px' }} />
              Remember Me
            </label>
            <a href="#" style={{ color: '#1d53d1', textDecoration: 'none' }}>Forgot Password?</a>
          </div>
          <div style={{
            fontSize: '.9em',
            color: '#1d53d1',
            textAlign: 'center',
            margin: '25px 0 10px'
          }} className="register-link">
            <p>
              Don't have an account? <a href="#" style={{ color: '#1d53d1', textDecoration: 'none', fontWeight: '600' }}>Register here</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
