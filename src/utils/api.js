import axios from 'axios';

const API_KEY = '7f3eb98aba7eb79745eed4bea5717cca';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchWeatherData = async (city) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      units: 'metric',
      appid: API_KEY
    }
  });
  return response.data;
};
