class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Method to check if the linked list is empty
    isEmpty() {
        return this.head === null;
    }
}

// Example usage:
const linkedList = new LinkedList();

console.log(linkedList.isEmpty()); // Output: true

linkedList.head = new Node(1);
console.log(linkedList.isEmpty()); // Output: false
