import './App.css';
import React from 'react';
import DigitalClock from "./components/DigitalClock";
import Countdown from "./components/Countdown";
import Stopwatch from './components/Stopwatch';

function App() {
  return (
    <div className="App">
      <DigitalClock />
      <h2>Falta para el próximo partido...</h2>
      <Countdown />
      <div className="appOne">
      <h3>¿Cúanto tardas en cantar el himno?</h3>
      <Stopwatch />
      </div>
    </div>
  );
}

export default App;
