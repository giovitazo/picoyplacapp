import React, { Component } from "react";
import "../scss/dataInput.scss";

// container to show FormElement components

export default class DataInput extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
