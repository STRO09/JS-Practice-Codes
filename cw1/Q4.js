// Write a named function filterEvenNumbers that takes an array of numbers  as a parameter and returns a new array containing only the even numbers. 


function filterEvenNumbers(...arr) {
    return arr.filter((num) => {
       return num % 2 === 0;
    })
}

const evenNumbers = filterEvenNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(evenNumbers);
