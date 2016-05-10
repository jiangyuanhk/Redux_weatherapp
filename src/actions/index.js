import axios from 'axios';

const API_KEY = 'e5ed1b8f2a33b15c5e79b7caf6d3f27a';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  console.log(request);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
