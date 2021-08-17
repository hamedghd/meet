import React, { Component } from 'react';

class NumberOfEvents extends Component {
  state = {
    numberOfEvents: 32,
  };
  render() {
    return (
      <div className="numberOfEvents">
        <input
          className="event-number-input"
          type="number"
          placeholder="Enter Number of Events"
          id="numberOfEvents__input"
          value={this.state.numberOfEvents}
        />
      </div>
    );
  }
}

export default NumberOfEvents;
