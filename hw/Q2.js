// Create an arrow function named calculateGrade that takes a score as a parameter and returns the grade (e.g., A, B, C).

const calculateGrade= (score) => {
    if(score>90) return 'A'
    else if(score>75) return 'B'
    else if(score>60) return 'C'
    else if(score>35) return 'D'
    else return 'F'
}

const Student = {

    id : 5,
    name : 'Sagar', 
    marks: 97
}
console.log(calculateGrade(Student.marks))