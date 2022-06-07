export class stateField {
  constructor() {
    this.value = "";
    this.valid = false;
    this.reason = "";
  }
  /* Tests change the valid and reason fields according to the value field of a stateField object */

  test(testType) {
    switch (testType) {
      case "plateNumber":
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
      case "date":
        break;

      default:
        break;
    }
  }
}

/*class Test {
  constructor() {
    passed: false;
  }
}
*/
