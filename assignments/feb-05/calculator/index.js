const displayPreviousValue = document.getElementById("entered-value");
const displayCurrentValue = document.getElementById("result");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");

const display = new Display(displayPreviousValue, displayCurrentValue);

numberBtn.forEach((btn) => {
  btn.addEventListener("click", () => display.enterValue(btn.innerHTML));
});

operatorBtn.forEach((op) => {
  op.addEventListener("click", () => {
    display.setOperation(op.value);
  });
});
