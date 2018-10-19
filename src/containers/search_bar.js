import React, { Component } from 'react';

import { connect } from 'react-redux';
import { fetchWeather } from '../actions/index'
import { bindActionCreators } from 'redux';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ''
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(searchTerm) {
    this.setState({searchTerm})
  }

  onFormSubmit(event) {
    // Prevent page from reloading as we are a SPA
    event.preventDefault();

    // Execute API request.
    this.props.fetchWeather(this.state.searchTerm);

    // Clear the input after searching for city.
    this.setState({ searchTerm: '' })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} className="input-group">
          <input
            placeholder="Get a five-day forecast in your favourite cities."
            className="form-control"
            value={this.state.searchTerm}
            onChange={event => this.onInputChange(event.target.value)}
          />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-secondary">Submit</button>
          </span>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
