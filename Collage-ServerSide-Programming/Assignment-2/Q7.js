//Write a JavaScript program to sort a list of elements using Bubble sort
function bubbleSort(arr) {
    const n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap arr[i] and arr[i + 1]
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

// Example usage:
const unsortedArray = [5, 3, 8, 4, 2, 7, 1, 6];
const sortedArray = bubbleSort(unsortedArray);
console.log("Sorted array:", sortedArray);
