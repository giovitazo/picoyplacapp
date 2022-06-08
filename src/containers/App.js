import "../scss/App.scss";
import Result from "../components/Result";
import DataInput from "./DataInput";
import FormElement from "../components/FormElement";
import logo from "../img/Logo.png";
import React, { Component } from "react";
import { stateField, predict } from "../tests.js";
import moment from "moment";

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
      displayResult: "",
    };
  }

  checkAllDataOk = async () => {
    //checks for data to activate de predict Button.
    if (
      this.state.plateNumber.valid &&
      this.state.date.valid &&
      this.state.time.valid
    ) {
      await this.setState({ allDataOk: true });
    } else {
      await this.setState({ allDataOk: false });
    }
  };

  checkMobility = () => {
    //Validates mobility conditions.
    let weekday = moment(this.state.date.value, "MM/DD/YYYY").day();
    let dayHour = moment(this.state.time.value, "HH:mm");
    let plateDigit = this.state.plateNumber.value.at(-1);
    if (predict(plateDigit, weekday, dayHour)) {
      this.setState({ displayResult: "You are free to go" });
    } else {
      this.setState({ displayResult: "Leave your car at home" });
    }
  };
  onReset = async () => {
    /* EMPTIES INPUTS AND RESTORES STATES */
    let inputs = document.querySelectorAll("input");
    inputs.forEach((element) => {
      element.value = "";
    });
    await this.setState({
      plateNumber: new stateField(),
      time: new stateField(),
      date: new stateField(),
      displayResult: "",
    });
    await this.checkAllDataOk();
  };
  onStateChange = async (event) => {
    /*TAKES INPUT VALUE AND UPDATES STATE */
    let stateObject = function () {
      let returnState = {};
      let returnObj = new stateField();
      returnObj.value = this.target.value;
      returnObj.test(this.target.id);
      returnState[this.target.id] = returnObj;
      return returnState;
    }.bind(event)();
    await this.setState(stateObject);
    await this.checkAllDataOk();
  };
  render() {
    return (
      <div className="App">
        <header>
          <img src={logo} alt="PICOYPLACapp" />
        </header>
        <Result displayResult={this.state.displayResult} />
        <DataInput>
          {" "}
          {/* Creates form Elements and pass state as props */}
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
            message={this.state.date.reason}
            stateChange={this.onStateChange}
          />
          <FormElement
            label="Time:"
            statePart="time"
            message={this.state.time.reason}
            stateChange={this.onStateChange}
            type="time"
          />
          <div className="buttonPlate">
            {" "}
            {/* first button runs onReset method to clean inputs and restore state*/}
            <button onClick={this.onReset}>Reset</button>{" "}
            {/* second button runs checkMobility method to predict circulation*/}
            <button
              disabled={!this.state.allDataOk}
              onClick={this.checkMobility}
            >
              Predict
            </button>
          </div>
        </DataInput>
      </div>
    );
  }
}

export default App;
