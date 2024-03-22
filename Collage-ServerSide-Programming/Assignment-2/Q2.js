// Write a JavaScript program to find the first index of a given element in an array using the linear search algorithm.
function linearSearch(arr, element) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === element) {
            return i; // Return the index of the element if found
        }
    }
    return -1; // Return -1 if the element is not found in the array
}

// Example usage:
let array = [3, 7, 1, 9, 4, 2, 6];
let elementToFind = 9;

let firstIndex = linearSearch(array, elementToFind);
if (firstIndex !== -1) {
    console.log("The first occurrence of", elementToFind, "is at index:", firstIndex);
} else {
    console.log("Element", elementToFind, "not found in the array.");
}
