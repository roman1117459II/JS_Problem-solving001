let inputNumber = 5; // Replace this with the number for which you want to calculate the factorial

if (inputNumber < 0) {
  console.log("Undefined (factorial is not defined for negative numbers)");
} else {
  let factorialResult = 1;

  for (let i = 2; i <= inputNumber; i++) {
    factorialResult *= i;
  }

  console.log(`The factorial of ${inputNumber} is: ${factorialResult}`);
}
