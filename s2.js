// Declare an array of objects to store student data (name and marks)
const students = [
    { name: 'David', marks: 80 },
    { name: 'Vinoth', marks: 77 },
    { name: 'Divya', marks: 88 },
    { name: 'Ishitha', marks: 95 },
    { name: 'Thomas', marks: 68 }
];

// Function to display the students' marks
function displayMarks(studentList) {
    console.log("Marks of 5 students:");
    // Iterate over the array and log each student's name and marks
    for (let i = 0; i < studentList.length; i++) {
        console.log(`${studentList[i].name}: ${studentList[i].marks}`);
    }
}

// Call the function to display the data
displayMarks(students);


