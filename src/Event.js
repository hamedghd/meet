import React, { Component } from "react";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
    };
  }
  render() {
    const { event } = this.props;
    return <div className="event">
      <div className="basic-info">

      </div>
    </div>;
  }
}
export default Event;