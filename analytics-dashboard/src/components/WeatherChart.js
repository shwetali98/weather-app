import React from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const WeatherChart = ({ data }) => {
    const chartData = {
        labels: data.map((entry) => new Date(entry.Timestamp).toLocaleTimeString()),
        datasets: [
            {
                label: "Temperature (°C)",
                data: data.map((entry) => entry.Temperature),
                borderColor: "red",
                fill: false,
            },
            {
                label: "Wind Speed (km/h)",
                data: data.map((entry) => entry.WindSpeed),
                borderColor: "blue",
                fill: false,
            },
            {
                label: "Snowfall (cm)",
                data: data.map((entry) => entry.Snowfall),
                borderColor: "gray",
                fill: false,
            },
        ],
    };

    return (
        <div>
            <h3>Weather Data</h3>
            <Line data={chartData} />
        </div>
    );
};

export default WeatherChart;
