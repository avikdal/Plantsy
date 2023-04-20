import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import PlantPage from './PlantPage';

function App() {
  const [cartClicked, setCartClicked] = useState(false)


  return (
    <div className="App">
      <Header cartClicked={cartClicked} setCartClicked={setCartClicked} />    
      <PlantPage cartClicked={cartClicked} />
    </div>
  );
}

export default App;
