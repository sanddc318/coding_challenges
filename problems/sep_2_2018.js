// Have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (e.g. if num = 4, return (4 * 3 * 2 * 1)). For the test cases, the range will be between 1 and 18 and the input will always be an integer.

function FirstFactorial(num) {
  // code goes here
  for (let i = num - 1; i >= 1; --i) {
    num *= i;
  }

  return num;
}

FirstFactorial(readline());

function readline() {
  const randNum = Math.ceil(Math.random() * 18);
  return randNum;
}
