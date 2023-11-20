// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
//     // Compare the original string with its reversed version
//     return cleanedStr === cleanedStr.split('').reverse().join('');
//   }
  
//   // Example usage:
//   let testString = "A man a plan a canal Panama";
//   if (isPalindrome(testString)) {
//     console.log(`"${testString}" is a palindrome.`);
//   } else {
//     console.log(`"${testString}" is not a palindrome.`);
//   }
  

// function isPalindrome(str) {
//     // Remove non-alphanumeric characters and convert to lowercase
//     let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
//     // Manual check for palindrome
//     for (let i = 0; i < Math.floor(cleanedStr.length / 2); i++) {
//       if (cleanedStr[i] !== cleanedStr[cleanedStr.length - 1 - i]) {
//         return false;
//       }
//     }
    
//     return true;
//   }
  
  
//   let testString = "A man a plan a canal Panama";
//   if (isPalindrome(testString)) {
//     console.log(`"${testString}" is a palindrome.`);
//   } else {
//     console.log(`"${testString}" is not a palindrome.`);
//   }
  

let testString = "nananananananan";
let isPalindrome = true;

for (let i = 0; i < Math.floor(testString.length / 2); i++) {
  if (testString[i] !== testString[testString.length - 1 - i]) {
    isPalindrome = false;
    break;
  }
}

if (isPalindrome) {
  console.log(`"${testString}" is a palindrome.`);
} else {
  console.log(`"${testString}" is not a palindrome.`);
}
