// Provide an example of array destructuring and object destructuring in  JavaScript.

const User = {
    id: 5,
    name: "sagar",
    Sal: 45500
}

const Products = ["Pen", "Pencil", "Eraser"]

let [a1,a2,a3] = Products

let {id: b1, name: b2, Sal: b3} = User



console.log(b2)
console.log(a2)
