/* 
Write a JavaScript program to find the diagonal of a square where the length of each
side is 9.
*/
function findDiagonal() {
  const side = parseInt(document.getElementById("side").value);

  const diagonal = (Math.sqrt(2) * side).toFixed(2);

  document.getElementById("diagonal").innerHTML =
    side < 1 ? "Square side should be 1 cm or greater" : `${diagonal} cm`;
}

/* 
b. Write a JavaScript program to find the area of a triangle where lengths of the three of its
sides are 5, 6 and 7.
*/

function findTriangleArea() {
  const side1 = parseInt(document.getElementById("side1").value);
  const side2 = parseInt(document.getElementById("side2").value);
  const side3 = parseInt(document.getElementById("side3").value);

  const semiPerimeter = (side1 + side2 + side3) / 2;

  const area = Math.sqrt(
    semiPerimeter *
      ((semiPerimeter - side1) *
        (semiPerimeter - side2) *
        (semiPerimeter - side3))
  ).toFixed(2);

  document.getElementById("triangleArea").innerHTML =
    area > 0 ? `${area} cm` : "Such triangle doesn't exist";
}

/* 
c. Write a JavaScript program to find the circumference and surface area of a circle whose
radius is 4.
i. When trying to find these values, you will need to use PI. Remember constants?
 */

function findCircleInfo() {
  const radius = parseInt(document.getElementById("radius").value);

  const circumference = (radius * 2 * Math.PI).toFixed(2);

  const area = (radius * radius * Math.PI).toFixed(2);

  document.getElementById("circumference").innerHTML =
    radius < 1 ? "Radius should be greater than 1" : `${circumference} cm`;

  document.getElementById("circleArea").innerHTML =
    radius < 1 ? "Radius should be greater than 1" : `${area} cm`;
}
