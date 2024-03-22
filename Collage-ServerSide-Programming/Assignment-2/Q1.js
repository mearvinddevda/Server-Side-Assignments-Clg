// Write a JavaScript program to find all the index positions of a given word within a given string.
function findAllOccurrences(mainString, wordToFind) {
    let indexes = [];
    let index = mainString.indexOf(wordToFind);

    while (index !== -1) {
        indexes.push(index);
        index = mainString.indexOf(wordToFind, index + 1);
    }

    return indexes;
}

// Example usage:
let mainString = "This is an example sentence with the word 'example' repeated multiple times. This example demonstrates how to find all occurrences of a specific word.";
let wordToFind = "example";

let occurrences = findAllOccurrences(mainString, wordToFind);
console.log("Occurrences of '" + wordToFind + "' found at index positions: " + occurrences.join(", "));
