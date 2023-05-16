import React from 'react';
import './App.css';
import logo from './logo_spelled.png'; 
import background from './bg_gradient.jpg'; // Import the background image

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <header className="App-header">
        <img src={logo} alt="Logo" />
        <h1>
        INNERBLOOM X IMMERXION
        </h1>
        <h2>
        <a href="https://innerbloom.ticketleap.com/launch-party/" className="tickets-link">
        Tickets
        </a>
        </h2>
        <h3>6/23/23</h3>
        <p>CENTRAL COAST, CA</p>
      </header>
    </div>
  );
}

export default App;
