// Write a JavaScript program to sort the characters in a string alphabetically.
function sortStringAlphabetically(str) {
    // Convert the string to an array of characters, sort it alphabetically, and then join it back into a string
    return str.split('').sort().join('');
}

// Example usage:
const inputString = "hello world";
const sortedString = sortStringAlphabetically(inputString);
console.log("Original string:", inputString);
console.log("Sorted string:", sortedString);
