import moment from "moment";
/* Class used to provide state elements to the app, provides also a method to test if their fields have a valid value. */
export class stateField {
  constructor() {
    this.value = "";
    this.valid = false;
    this.reason = "";
  }
  /* Tests change the valid and reason fields according to the value field of a stateField object */

  test(testType) {
    switch (testType) {
      case "plateNumber": // Tests if the platenumber has the correct format.
        switch (this.value.length) {
          case 0:
            this.valid = false;
            this.reason = "";
            break;
          case 6:
          case 7:
            let element = this.value;
            let validity = true;
            for (let i = element.length - 1; i > 2; i--) {
              let char = element[i];
              validity = validity && !isNaN(char);
            }
            if (validity) {
              this.valid = true;
              this.message = "";
            } else {
              this.valid = false;
              this.reason = "*This is not a valid Licence Number!";
            }
            break;
          default:
            this.valid = false;
            this.reason = "*This is not a valid Licence Number!";
            break;
        }
        break;
      case "date": // Tests if the date has the correct format.
        switch (this.value.length) {
          case 0:
            this.valid = false;
            this.reason = "";
            break;

          default:
            let instant = moment(this.value, "MM/DD/YYYY", true);
            if (instant.isValid()) {
              this.valid = true;
              this.reason = "";
            } else {
              this.valid = false;
              this.reason = "*This is not a valid date!";
            }
            break;
        }

        break; // Tests if the time has the correct format.
      case "time":
        switch (this.value.length) {
          case 0:
            this.valid = false;
            this.reason = "";
            break;

          default:
            let instant = moment(this.value, "HH:mm", true);
            if (instant.isValid()) {
              this.valid = true;
              this.reason = "";
            } else {
              this.valid = false;
              this.reason = "*This is not a valid time!";
            }
            break;
        }
        break;

      default:
        break;
    }
  }
}

/*Function to check if the car can circulate given all the circumstances */
export function predict(plateDigit, weekDay, dayHour) {
  let firstBreakStart = moment("07:00", "HH:mm");
  let firstBreakEnd = moment("09:30", "HH:mm");
  let secondBreakStart = moment("16:00", "HH:mm");
  let secondBreakEnd = moment("19:30", "HH:mm");
  console.log(plateDigit);
  if (weekDay > 0 && weekDay < 6) {
    if (
      (dayHour >= firstBreakStart && dayHour <= firstBreakEnd) ||
      (dayHour >= secondBreakStart && dayHour <= secondBreakEnd)
    ) {
      if (Math.floor(plateDigit / 2) - (weekDay - 1) === 0) {
        return false;
      } /*else {
        console.log("Placa circula hoy");
      }*/
    } /*else {
      console.log("Hora de libre tránsito...");
    }*/
  } /*else {
    console.log("FDS");
  }*/
  return true;
}
