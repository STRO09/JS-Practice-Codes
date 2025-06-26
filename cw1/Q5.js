// Demonstrate array method (map, filter, reduce) 
// a. Map to square each number. 
// b. Filter to extract odd number. 
// c. Reduce to calculate the sum of all elements.

function SquareNums(...arr) {

    return arr.map((num)=> {
        return num*num
    })
}

console.log(SquareNums(2,7,9,3))

function extractOddNums(...arr) {
return arr.filter ((num)=>{
    return num%2!=0
} )
}

console.log(extractOddNums(2,3,4,6,8,9,56,5,1))


function SumArray(...arr) {
    return arr.reduce((sum,num)=> { return sum += num})
} 

console.log(SumArray(4,5,6,9))