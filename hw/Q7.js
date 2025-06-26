// Write a function to filter students with marks greater than 80 from an array of student objects.

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

function FilterFailedStudents(students) {
 return students.filter((student)=>{
    return student.marks>=35
 })
}

console.log(FilterFailedStudents(Students))