import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather'

const rootReducer = combineReducers({
  cities: WeatherReducer
});

export default rootReducer;
