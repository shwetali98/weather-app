import React from 'react';

const AQIIndicator = ({ aqi }) => {
  return (
    <div className="aqi-indicator">
      <span role="img" aria-label="air quality">⚙️</span>
      <strong> AQI: </strong> {aqi}
    </div>
  );
};

export default AQIIndicator;
