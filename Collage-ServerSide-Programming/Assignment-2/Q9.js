// Write a JavaScript program to check if a numeric array is sorted or not.
function isArraySorted(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false; // If any element is greater than the next one, the array is not sorted
        }
    }
    return true; // If no such element found, the array is sorted
}

// Example usage:
const sortedArray = [1, 2, 3, 4, 5];
const unsortedArray = [5, 3, 8, 4, 2, 7, 1, 6];

console.log("Is sortedArray sorted?", isArraySorted(sortedArray));
console.log("Is unsortedArray sorted?", isArraySorted(unsortedArray));
