function alphabetizeString(str) {
    // Convert the string to lowercase to handle case-insensitive sorting
    const lowerStr = str.toLowerCase();
  
    // Split the string into an array of characters, sort alphabetically, and join back into a string
    const sortedStr = lowerStr.split('').sort().join('');
  
    return sortedStr;
  }
  
  // Example usage:
  const inputString = 'webmaster';
  const outputString = alphabetizeString(inputString);
  console.log(outputString); // Output: abeemrstw