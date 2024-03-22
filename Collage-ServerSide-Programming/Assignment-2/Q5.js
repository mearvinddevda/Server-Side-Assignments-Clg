// Write a JavaScript program to sort a list of elements using Heap sort.
function heapSort(arr) {
    buildMaxHeap(arr);

    for (let i = arr.length - 1; i > 0; i--) {
        // Swap the root (maximum value) of the heap with the last element
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // Reduce the size of the heap and heapify the root element
        heapify(arr, i, 0);
    }

    return arr;
}

function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }
}

function heapify(arr, n, i) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}

// Example usage:
const unsortedArray = [5, 3, 8, 4, 2, 7, 1, 6];
const sortedArray = heapSort(unsortedArray);
console.log("Sorted array:", sortedArray);
