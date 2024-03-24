function swapCase(str) {
    // Initialize an empty string to store the result
    let swappedString = '';

    // Iterate through each character in the input string
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);

        // Check if the character is uppercase
        if (char === char.toUpperCase()) {
            // Convert uppercase to lowercase
            swappedString += char.toLowerCase();
        } else {
            // Convert lowercase to uppercase
            swappedString += char.toUpperCase();
        }
    }

    return swappedString;
}

// Example usage:
const inputString = "Hello World";
const swappedString = swapCase(inputString);
console.log(swappedString); // Output: "hELLO wORLD"
