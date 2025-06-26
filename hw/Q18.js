// Show an example of throw where a function throws an exception if a product'squantity in the inventory falls below a certain threshold (e.g., less than 5 units)

let quantity = 50;

function Order(units){
    try{
    if(quantity-units<=5) {
        throw new Error('Low stock. cannot order')
    }
    else {
        quantity-=units
        console.log("Order placed successfully")
    }
    }
    catch(e){
        console.log(e.name+" : "+e.message)
        console.log("Units remaining: "+quantity)
    }
}

Order(43)
Order(6)