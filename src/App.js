import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="logo-circle">
          <div className="logo-text">Calndr.io</div>
        </div>
        <h2 className="subtitle">Effortless Scheduling</h2>
        <div className="buttons">
          <button className="button">Sign Up</button>
          <button className="button">Sign In</button>
        </div>
        <div className="qr-code">
          <img src="qrimage.png" alt="QR Code" />
        </div>
      </div>
    </div>
  );
}

export default App;
