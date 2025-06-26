// Create a function findTopper that accepts an array of student marks and returns the highest mark.

function findTopper(...arr) {
    return Math.max(...arr)
}

console.log(findTopper(3,8,12,78,90,34,21,46,46))