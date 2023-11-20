let number = 11; // Replace this with the number you want to check
// console.log(Math.sqrt(number));
if (number <= 1) {
  console.log("The number is not prime."); // 0 and 1 are not prime numbers
} else {
  let isPrime = true;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false; // If the number is divisible by any other number, it's not prime
      break;
    }
  }

  if (isPrime) {
    console.log("The number is prime.");
  } else {
    console.log("The number is not prime.");
  }
}
