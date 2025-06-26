// Show an example of exception propagation when adding an item to a shopping cart if the product is out of stock in the online store's inventory.

const Products = [
    {
    name:"MAttress",
    id :2,
    price :2000
},
{
    name:"Bottles",
    id :10,
    price :200
},
{
    name:"Medicines",
    id :20,
    price :250
}
]

const cart=[]

const a = (id)=> {
   const product = Products.find(product => product.id === id);
  if (!product) {
    throw new Error(` Product not found`);
  }
  cart.push(product);
}

const b =(id) => {
    a(id)
}


const addProducts = (id)=> {
    try{
        b(id)
    }
    catch(e) {
        console.log(e.name+":"+e.message)
    }
}

addProducts(20)
addProducts(2)

addProducts(1)
console.log(cart)

