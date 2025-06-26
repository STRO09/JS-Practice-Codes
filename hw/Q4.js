// Write a named function filterPassedStudents that takes an array of student marks and returns a new array containing only the students who passed.

function filterPassedStudents(...arr) {

    return arr.filter((mark)=> {
        return mark>35
    })
}


const PassStudents = filterPassedStudents(36,20,50,80,79,67,75, 3)

console.log(PassStudents)