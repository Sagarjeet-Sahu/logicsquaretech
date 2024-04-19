function generateStudentMarkSheets(students, details) {
    const studentsMarkSheets = [];
    
    students.forEach(student => {
        const studentDetails = details.find(detail => detail.Roll === student.Roll);
        let totalMarks = 0;
        
        const subjects = {};
        for (const subject in studentDetails.subjects) {
            subjects[subject] = studentDetails.subjects[subject];
            totalMarks += studentDetails.subjects[subject];
        }
        
        const status = totalMarks >= 200 ? "pass" : "fail";
        
        const markSheet = {
            name: student.name,
            Roll: student.Roll,
            ...subjects,
            total: totalMarks,
            status: status
        };
        
        studentsMarkSheets.push(markSheet);
    });
    
    return studentsMarkSheets;
}

// Input data
const students = [
    {name: "Dhishan Debnath", Roll: 1},
    {name: "Animesh Gupta", Roll: 2},
    {name: "Tapas Sen", Roll: 3},
    {name: "Misti Dutta", Roll: 4},
    {name: "Chini Misra", Roll: 5}
];

const details = [
    {Roll: 1, subjects: {math: 55, english: 75, chemistry: 76, computer: 94}},
    {Roll: 2, subjects: {math: 1, english: 56, computer: 48, chemistry: 12}},
    {Roll: 3, subjects: {math: 33, chemistry: 12, computer: 50, english: 35}},
    {Roll: 4, subjects: {english: 12, chemistry: 85, computer: 68, math: 45}},
    {Roll: 5, subjects: {math: 35, english: 56, chemistry: 76, computer: 68}}
];

// Generate mark sheets
const studentsMarkSheets = generateStudentMarkSheets(students, details);
console.log(studentsMarkSheets);