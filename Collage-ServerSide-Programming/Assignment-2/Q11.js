function isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
}

// Example usage:
console.log(isNumber(5));          // Output: true
console.log(isNumber("Hello"));    // Output: false
console.log(isNumber(null));       // Output: false
console.log(isNumber(undefined));  // Output: false
console.log(isNumber(NaN));        // Output: false
console.log(isNumber(10 / 0));      // Output: false (Infinity is not considered a number in this context)
