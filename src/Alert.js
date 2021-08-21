import React, { Component } from 'react';

// This is the parent class:
class Alert extends Component {
  constructor(props) {
    super(props);
    // The color of Alert is set to null by default as its children will override this later on.
    this.color = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      fontSize: '14px',
      display: 'flex',
    };
  }

  // This component attempts to render text it receives from its props, using the style from its getStyle function.
  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

// Creates subclasses: InfoAlert and ErrorAlert
class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'blue';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'red';
  }
}
export { InfoAlert, ErrorAlert };