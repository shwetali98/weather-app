import React from 'react';
import './App.css';
import Header from './components/Header';
import ForecastCard from './components/ForecastCard';
import ForecastGraph from './components/ForecastGraph';
import MoonPhase from './components/MoonPhase';
import AQIIndicator from './components/AQIIndicator';
import Suggestions from './components/Suggestions';
import AlertPopup from './components/AlertPopup';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="top-widgets">
        <MoonPhase />
        <AQIIndicator />
      </div>
      <div className="forecast-section">
        <ForecastCard />
        <ForecastGraph />
      </div>
      <Suggestions />
      <AlertPopup />
    </div>
  );
}

export default App;
