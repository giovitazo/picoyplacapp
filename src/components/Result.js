import React, { Component } from "react";
import "../scss/results.scss";

// displays if the user is free to go, or should leave their car at home. This message is passed as a prop
export default class Result extends Component {
  render() {
    return (
      <div className="results">
        <span id="display">{this.props.displayResult}</span>
      </div>
    );
  }
}
