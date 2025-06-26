// Write a program to find the total sales from an array of Order objects in an  e- commerce system. 


const Orders = [
{
    id: 1, 
    product: "Pen", 
    quantity: 50,
    Price: 10
}
, {
    id: 2, 
    product: "Pencil", 
    quantity: 68,
    Price: 5
},
{
    id: 3, 
    product: "Eraser", 
    quantity: 40,
    Price: 3
}
]


function ordersTotalSales(orders) {

    return orders.reduce((sum, order)=>{
        return sum+= order.Price*order.quantity
    },0)
}

console.log(ordersTotalSales(Orders))