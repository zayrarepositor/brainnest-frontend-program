class Display {
  constructor(previousValue, currentValue) {
    this.displayCurrentValue = currentValue;
    this.displayPreviousValue = previousValue;
    this.calculator = new Calculator();
    this.operation = undefined;
    this.currentValue = "";
    this.previousValue = "";
    this.operators = {
      add: "+",
      rest: "-",
      mul: "*",
      div: "/",
    };
  }

  delete() {
    this.currentValue = this.currentValue.toString().slice(0, -1);
    this.printValue();
  }

  deleteAll() {
    this.currentValue = "";
    this.previousValue = "";
    this.operation = undefined;
    this.printValue();
  }

  setOperation(operation) {
    this.operation !== "equal" && this.calc();
    this.operation = operation;
    this.previousValue = this.currentValue || this.previousValue;
    this.currentValue = "";
    this.printValue();
  }

  enterValue(value) {
    if (value === "." && this.currentValue.includes(".")) return;
    if (value === "0" && this.currentValue === "0") return;
    if (this.currentValue.length > 8) return;
    this.currentValue = this.currentValue.toString() + value.toString();
    this.printValue();
  }

  printValue() {
    this.displayCurrentValue.textContent = this.currentValue;
    this.displayPreviousValue.textContent = `${this.previousValue} ${
      this.operators[this.operation] || ""
    }`;
  }

  calc() {
    const previousValue = parseFloat(this.previousValue);
    const currentValue = parseFloat(this.currentValue);

    if (isNaN(currentValue) || isNaN(previousValue)) return;

    this.currentValue = this.calculator[this.operation](
      previousValue,
      currentValue
    );
  }
}
