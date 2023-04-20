import React from 'react';
import './App.css';
import Header from './Header';
import PlantPage from './PlantPage';

function App() {
  // const [plants, setPlants] = useState([])

  // useEffect(() => {
  //   fetch('http://localhost:3000/plants')
  //   .then(r => r.json())
  //   .then(data => setPlants(data))
  // }, [])

  return (
    <div className="App">
      <Header />    
      <PlantPage />
    </div>
  );
}

export default App;
