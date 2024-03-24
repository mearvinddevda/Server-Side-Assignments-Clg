class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Method to calculate the area of the rectangle
    calculateArea() {
        return this.width * this.height;
    }

    // Method to calculate the perimeter of the rectangle
    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

// Create an instance of the Rectangle class
const rectangle = new Rectangle(5, 7);

// Calculate area and perimeter
const area = rectangle.calculateArea();
const perimeter = rectangle.calculatePerimeter();

// Output the results
console.log("Rectangle Area:", area);
console.log("Rectangle Perimeter:", perimeter);
