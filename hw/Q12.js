// Demonstrate an example of async and await to simulate fetching and displaying a customer's order history from an online shopping system.

const Orders = [{
    name:"MAttress",
    quantity :2,
    price :2000
},
{
    name:"Bottles",
    quantity :10,
    price :200
},
{
    name:"Medicines",
    quantity :20,
    price :250
}]

const fetchOrderHistory=(Orders)=>{

    return new Promise((resolve,reject)=>{
        if(Orders){
            resolve(Orders)
        }
        else {
            reject("Error, no Product history found")
        }
    })
}

console.log(fetchOrderHistory(Orders))


async function fetchOrders(){
try{
const data = await fetchOrderHistory(Orders)
if(data) {
    data.forEach(Order => {
    console.log("Product: "+Order.name+", Price: "+Order.price+", quantity: "+Order.quantity)
})
}
else {
    console.log("No Product Found")
}
}
catch(e){
    console.log("Unexpected Error: "+e)
}
}

fetchOrders()

// fetchOrderHistory(Orders).then(Orders=> Orders.forEach(Order => {
//     console.log("Product: "+Order.name+", Price: "+Order.price+", quantity: "+Order.quantity)
// }))
// .catch(e=> console.log("Error:",e))

// fetchOrderHistory(Orders)