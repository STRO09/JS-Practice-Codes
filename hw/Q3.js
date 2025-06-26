// Implement an anonymous function assigned to the variable increaseMarks that takes an array of marks as a parameter and increases each mark by 10.


const increaseMarks  = function(...arr) {
    return arr.map((marks)=> {
        return marks+2
    })
} 

console.log(increaseMarks(27,25,21,28,12))