import axios from 'axios';
import config from '../../config';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${config.API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},gb`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  };

}