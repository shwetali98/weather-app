import React from 'react';
import { Line } from 'react-chartjs-2';

const ForecastGraph = ({ data }) => {
  const graphData = {
    labels: data.map(item => item.date),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: data.map(item => item.temp),
        fill: false,
        borderColor: 'blue',
        tension: 0.3,
      },
    ],
  };

  return (
    <div className="forecast-graph">
      <h3>Weather Trends</h3>
      <Line data={graphData} />
    </div>
  );
};

export default ForecastGraph;
