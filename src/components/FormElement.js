import React, { Component } from "react";
import "../scss/formElement.scss";

export default class FormElement extends Component {
  render() {
    return (
      <div className="formElement">
        <label> {this.props.label} </label>
        <input type={this.props.type} placeholder={this.props.placeHolder} />
        <span id="plateNumberSpan" className="errorDisplay"></span> <br />
      </div>
    );
  }
}
