/* 
Write a JavaScript program that accepts two integers and displays the larger of the two.
*/
function findGreater() {
  const integer1 = parseInt(document.getElementById("integer1").value);

  const integer2 = parseInt(document.getElementById("integer2").value);

  document.getElementById("greater").innerHTML =
    integer1 > 0 && integer2 > 0
      ? integer1 > integer2
        ? `${integer1} is greater than ${integer2}`
        : `${integer2} is greater than ${integer1}`
      : "integers should be greater than 0";
}

/* 
Write a JavaScript program that checks whether an integer is an even or an odd number.
*/

function IsItEvenOrOddNumber() {
  const integer = parseInt(document.getElementById("integer").value);

  document.getElementById("evenOrOdd").innerHTML =
    integer > 0
      ? integer % 2 === 0
        ? `${integer} is a even number`
        : `${integer} is a odd number`
      : "integer should be greater than 0";
}
