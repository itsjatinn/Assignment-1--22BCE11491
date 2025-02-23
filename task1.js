function reverseNumber(num) {
    // Convert the number to a string
    const numStr = num.toString();
  
    // Reverse the string using array methods
    const reversedStr = numStr.split('').reverse().join('');
  
    // Convert the reversed string back to a number
    const reversedNum = parseInt(reversedStr);
  
    return reversedNum;
  }
  
  // Example usage:
  const x = 32243;
  const reversedX = reverseNumber(x);
  console.log(reversedX); // Output: 34223