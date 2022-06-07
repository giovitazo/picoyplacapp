import "../scss/App.scss";
import Result from "../components/Result";
import DataInput from "./DataInput";
import FormElement from "../components/FormElement";
import logo from "../img/Logo.png";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      plateNumber: "",
      date: "",
      time: "",
      allDataOk: false,
    };
  }
  onReset = () => {
    let inputs = document.querySelectorAll("input");
    inputs.forEach((element) => {
      element.value = "";
    });
    this.setState({ plateNumber: "", time: "", date: "" });
  };
  onStateChange = (event) => {
    let stateObject = function () {
      let returnObj = {};
      returnObj[event.target.id] = this.target.value;
      return returnObj;
    }.bind(event)();
    this.setState(stateObject);
  };
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} alt="PICOYPLACapp" />
        </header>
        <Result />
        <DataInput>
          <FormElement
            label="Plate number:"
            placeHolder="PSC0610"
            type="text"
            statePart="plateNumber"
            stateChange={this.onStateChange}
          />
          <FormElement
            label="Date:"
            placeHolder="MM/DD/YYYY"
            type="text"
            statePart="date"
            stateChange={this.onStateChange}
          />
          <FormElement
            label="Time:"
            statePart="time"
            stateChange={this.onStateChange}
            type="time"
          />
          <div className="buttonPlate">
            <button onClick={this.onReset}>Reset</button>
            <button>Predict</button>
          </div>
        </DataInput>
      </div>
    );
  }
}

export default App;
