import React, { Component } from 'react';
import SparklineGraph from '../components/sparklines_graph';
import GoogleMap from '../components/google_map';

import { connect } from 'react-redux';

export class WeatherList extends Component {
  renderList() {
    return this.props.cities.map(cityData => {
      const name = `${cityData.city.name},${cityData.city.country}`;
      const temperature = cityData.list.map(weather => weather.main.temp)
      const pressure = cityData.list.map(weather => weather.main.pressure)
      const humidity = cityData.list.map(weather => weather.main.humidity)
      const { lon, lat } = cityData.city.coord

      return (
        <tr key={name}>
          <td><GoogleMap latitude={lat} longitude={lon}/></td>
          <td><SparklineGraph data={temperature} colour="red" units="K"/></td>
          <td><SparklineGraph data={pressure} colour="blue" units="hPa"/></td>
          <td><SparklineGraph data={humidity} colour="orange" units="%"/></td>
        </tr>
      );
    });
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ cities }) {
  // const cities = state.cities
  return { cities }; // { cities } = { cities: cities }
}

export default connect(mapStateToProps)(WeatherList);
