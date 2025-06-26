// Provide an example of array destructuring and object destructuring in JavaScript to extract product names from an array of products and their details from a product object in an online shopping system.
const ProductNames =  ["Shirts","Jeans","Belts","Shoes"]
let [a1,a2,a3,a4] = ProductNames

console.log(a1)
console.log(a2)
console.log(a3)
console.log(a4)

const ProductDetails =  ["Embroidered stripes","Formal loose cozy","Raftaar used","Acche brand ka lag raha h"]
let [c1,c2,c3,c4] = ProductDetails

console.log(c1)
console.log(c2)
console.log(c3)
console.log(c4)

const Products = [
{
    name: a1,
    details: "Embroidered stripes"
},
{
    name: a2,
    details: 'Formal loose cozy'
},
 {
    name: a3,
    details: 'Raftaar used'
 },
 {
    name: a4,
    details: 'Acche brand ka lag raha h'
 }
]


let [b1,b2,b3,b4] = Products.map(p=>p.details)
console.log(b1)
console.log(b2)
console.log(b3)
console.log(b4)