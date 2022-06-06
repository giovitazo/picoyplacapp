import "../scss/App.scss";
import Result from "../components/Result";
import DataInput from "./DataInput";
import FormElement from "../components/FormElement";
import logo from "../img/Logo.png";

function App() {
  return (
    <div className="App">
      <header>
        <img src={logo} alt="PICOYPLACapp" />
      </header>
      <Result />
      <DataInput>
        <FormElement label="Plate number:" placeHolder="PSC0610" type="text" />
        <FormElement label="Date:" placeHolder="MM/DD/YYYY" type="text" />
        <FormElement label="Time:" type="time" />
        <div className="buttonPlate">
          <button>Reset</button>
          <button>Predict</button>
        </div>
      </DataInput>
    </div>
  );
}

export default App;
