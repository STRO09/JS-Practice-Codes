// Demonstrate an example for default parameters and rest parameters in a function that calculates the total cost of items in a customer's shopping cart. Use a default parameter for applying a discount rate and rest parameters for the list of product prices.

const Products = [
{
    name:"MAttress",
    price :2000
},
{
    name:"Bottles",
    price :200
},
{
    name:"Medicines",
    price :250
}
]
function TotalCost(discount=20, ...prices){
    return prices.reduce((totalcost, price)=>{ return totalcost + (price - price*discount*0.01)},0)
}
const prices = Products.map((p)=>{return p.price})
console.log(TotalCost(undefined,...prices))