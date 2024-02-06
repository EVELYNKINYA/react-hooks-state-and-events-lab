import React, { useState } from 'react';
import '../data/index.css'; 

function App() {
  // State variable to track the current mode
  const [isDarkMode, setDarkMode] = useState(false);
 
  // Event handler for toggling between dark and light modes
  const toggleDarkMode = () => {
    setDarkMode(!isDarkMode);
  };

  // Dynamically set the className based on the current mode
  const appClass = `App ${isDarkMode ? 'dark' : 'light'}`;

  return (
    <div className={appClass}>
      <h1>Your App Content</h1>
      <p>This is your app content.</p>
      <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
    </div>
  );
}

export default App;

