var student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};

// Print the object before deleting the property
console.log("Object before deleting the rollno property:");
console.log(student);

// Delete the rollno property
delete student.rollno;

// Print the object after deleting the property
console.log("\nObject after deleting the rollno property:");
console.log(student);
