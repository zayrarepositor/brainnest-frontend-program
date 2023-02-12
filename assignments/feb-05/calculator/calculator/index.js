class Calculator {
  add(num1, num2) {
    let result = num1 + num2;
    if (Number.isInteger(result)) return result;
    return result.toFixed(5);
  }
  rest(num1, num2) {
    let result = num1 - num2;
    if (Number.isInteger(result)) return result;
    return result.toFixed(5);
  }
  mul(num1, num2) {
    let result = num1 * num2;
    if (Number.isInteger(result)) return result;
    return result.toFixed(5);
  }
  div(num1, num2) {
    let result = num1 / num2;
    if (Number.isInteger(result)) return result;
    return result.toFixed(5);
  }
}
