import React, { Component } from "react";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      event: {},
      expanded: false,
    };
    this.toggleExpanded = this.toggleExpanded.bind(this);
  }
  toggleExpanded() {
    this.setState({
      expanded: !this.state.expanded,
    });
  }
  render() {
    const { event } = this.props;
    return <div className="event">
      <div className="basic-info">

      </div>
      <button className="details-btn" onClick={this.toggleExpanded}>
        {!this.state.expanded ? 'Show Details' : 'Hide Details'}
      </button>
    </div>;
  }
}
export default Event;