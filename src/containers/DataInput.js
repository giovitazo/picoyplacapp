import React, { Component } from "react";
import "../scss/dataInput.scss";

export default class DataInput extends Component {
  render() {
    return <div>{this.props.children}</div>;
  }
}
