import React, { Component } from "react";
import "../scss/formElement.scss";

//form elements, they accept input and run a verification when the date is changed.

export default class FormElement extends Component {
  render() {
    const { stateChange } = this.props;
    return (
      <div className="formElement">
        <label> {this.props.label} </label>
        <input
          type={this.props.type}
          placeholder={this.props.placeHolder}
          onChange={stateChange}
          id={this.props.statePart}
        />
        <span className="errorDisplay">{this.props.message}</span> <br />
      </div>
    );
  }
}
