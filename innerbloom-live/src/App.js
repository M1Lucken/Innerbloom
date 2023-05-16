import React, { useEffect } from 'react';
import './App.css';
import logo from './logo_spelled.png'; 
import background from './bg_gradient.jpg'; // Import the background image
import backgroundMobile from './bg_gradient_mobile.jpg';

function App() {
  const isMobile = window.innerWidth <= 768; // Or choose another breakpoint

  useEffect(() => {
    if (isMobile) {
      window.scrollTo(0, window.innerHeight / 2);
    }
  }, [isMobile]);

  return (
    <div className={`App ${isMobile ? 'App-mobile' : 'App-desktop'}`}>
      <header className="App-header">
        <div className="content-container">
          <img src={logo} className="App-logo" alt="Logo" />
          <h1>INNERBLOOM X IMMERXION</h1>
          <h2>
            <a href="https://innerbloom.ticketleap.com/launch-party/" className="tickets-link">TIX HERE</a>
          </h2>
          <h3>6/23/23</h3>
          <p>CENTRAL COAST, CA</p>
        </div>
        <span className="flower-emoji">🌸</span>
      </header>
    </div>
  );
}

export default App;
