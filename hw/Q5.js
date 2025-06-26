// Demonstrate array methods (map, filter, reduce): a. Use map to convert marks to grades. b. Use filter to extract students who scored above. c. Use reduce to calculate the total marks of all students.

const Students = [{
    id:1,
    name:'Sagar',
    score:98
}, 
{
    id:2,
    name:'Stro',
    score:60
}, 
{
    id:3,
    name:'Theseus',
    score:30
}]

//a
function MarksToGrade(arr) {
    let grade=''
    return arr.map((Student)=>{
        if(Student.score>90) grade='A'

        else if(Student.score>75) grade='B'

        else if(Student.score>60) grade='C'

        else if(Student.score>35) grade  ='D'

        else grade= 'F'

        return {Student,grade}
    })
}

console.log(MarksToGrade(Students))

//b
function filterStudents(arr,limit) {

   return arr.filter((Student)=> {
        if(Student.score>limit) return Student
    })
 }

 console.log(filterStudents(Students,35))



//c
function totalMarksStudents(arr){
    return arr.reduce((sum,Student)=> {
        return sum+=Student.score
    },0)
}

console.log(totalMarksStudents(Students))