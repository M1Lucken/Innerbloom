import React from 'react';
import './App.css';
import logo from './logo_spelled.png'; 
import background from './bg_gradient.jpg'; // Import the background image

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url(${background})` }}>
      <header className="App-header">
        <img src={logo} alt="Logo" />
        <h1>Welcome to Innerbloom Live!</h1>
        <p>The ultimate music festival experience is coming soon.</p>
      </header>
    </div>
  );
}

export default App;
