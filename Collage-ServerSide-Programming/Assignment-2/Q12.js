function isRegExp(value) {
    return value instanceof RegExp;
}

// Example usage:
console.log(isRegExp(/test/));        // Output: true
console.log(isRegExp(new RegExp('a')));// Output: true
console.log(isRegExp("Hello"));       // Output: false
console.log(isRegExp(123));           // Output: false
