/* Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the input will always be an integer.
*/

// function FirstFactorial(num) {
//   for (let i = num - 1; i >= 1; --i) {
//     num *= i;
//   }

//   return num;
// }

// Using recursion.
function FirstFactorial(num) {
  if (num <= 0) return 1;

  return num * FirstFactorial(num - 1);
}

// Do not change code below this line.
FirstFactorial(generateRandNum());

function generateRandNum() {
  const randNum = Math.ceil(Math.random() * 18);
  return randNum;
}
