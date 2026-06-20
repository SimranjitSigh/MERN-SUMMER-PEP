// Problem Statement: You are given an array of student objects, where each object contains the following properties: id, name, marks, and attendance. Your task is to perform the following operations:

// 1. Filter out the students who have scored less than 40 marks and create a new array of passed students.  
// 2. Create a new array of student objects that includes an additional property called grade, which is determined based on the marks as follows:
//    - Marks >= 80: Grade A
//    - Marks >= 60 and < 80: Grade B
//    - Marks >= 40 and < 60: Grade C
//    - Marks < 40: Grade F
// 3. Calculate the average marks of the class.
// 4. Find the student with the highest marks and display their name and marks. 




const student = [
    { id: 1, name: 'Aman', marks: 85, attendance: 92 },
    { id: 2, name: 'Riya', marks: 38, attendance: 76 },
    { id: 3, name: 'Karan', marks: 67, attendance:81 },
    { id: 4, name: 'Simran', marks: 91, attendance: 88 },
    { id: 5, name: 'Raj', marks: 45, attendance: 65 },
    { id: 6, name: 'Neha', marks: 29, attendance: 95 },

];


const passedStudents =student.filter(student=> student.marks >= 40 );

const studentReport = student.map(({ name, marks, attendance }) => {
let grade;
if (marks >= 80) {
    grade = 'A';
} else if (marks >= 60) {
    grade = 'B';
} else if (marks >= 40) {
    grade = 'C';
} else {
    grade = 'F';
}
return { name, marks, attendance, grade };
});

const averageMarks=
student.reduce((total, student) => total + student.marks, 0) / student.length;
const topper =student.reduce((top,student) => (student.marks > top.marks ? student : top));
console.log("Passed Students:");
passedStudents.forEach(student => {
    console.log(`Name: ${student.name} - Marks: ${student.marks}`);
});


console.log("Student Report:");
studentReport.forEach(student => {
    console.log(`Name: ${student.name}, Marks: ${student.marks}, Attendance: ${student.attendance}, Grade: ${student.grade}`);
});

console.log("\nClass Average:");
console.log(` ${averageMarks.toFixed(2)}`);

console.log("\nTopper:");
console.log(`${topper.name} with ${topper.marks} marks`);