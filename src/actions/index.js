import axios from 'axios';

const API_KEY='971336f11cc2d277ac68469ef71b56c1';
const ROOT_URL=`http://api.openweathermap.org/data/2.5/forecast?APPID=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
export const PROMOTE_CITY = 'PROMOTE_CITY';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city}`;
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
