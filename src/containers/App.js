import "../scss/App.scss";
import Result from "../components/Result";
import DataInput from "./DataInput";
import FormElement from "../components/FormElement";
import logo from "../img/Logo.png";
import React, { Component } from "react";
import { stateField } from "../tests.js";
/* ENTRY POINT*/
class App extends Component {
  constructor() {
    /* MANAGES STATE OF THE WHOLE APPLICATION */
    super();
    this.state = {
      plateNumber: new stateField(),
      date: new stateField(),
      time: new stateField(),
      allDataOk: false,
    };
  }
  onReset = () => {
    /* EMPTIES INPUTS AND RESTORES STATES */
    let inputs = document.querySelectorAll("input");
    inputs.forEach((element) => {
      element.value = "";
    });
    this.setState({
      plateNumber: new stateField(),
      time: new stateField(),
      date: new stateField(),
    });
  };
  onStateChange = (event) => {
    /*TAKES INPUT VALUE AND UPDATES STATE */
    let stateObject = function () {
      let returnState = {};
      let returnObj = new stateField();
      returnObj.value = this.target.value;
      returnObj.test(this.target.id);
      returnState[this.target.id] = returnObj;
      return returnState;
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
            message={this.state.plateNumber.reason}
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
