// Write a program to find the total marks scored by all students in a class.

const Students = [{

    name: 'A',
    id: 1, 
    marks:35
},
{
    name: 'B',
    id: 2, 
    marks: 60
},
{
    name: 'C',
    id: 3, 
    marks: 54
},
{
    name: 'D',
    id: 4, 
    marks: 34
}
]


function StudentsTotalMarks(students) {

    return students.reduce((sum, student)=>{
        return sum+= student.marks
    },0)
}

console.log(StudentsTotalMarks(Students))