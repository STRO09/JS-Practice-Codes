// Demonstrate an example of a Promise that simulates fetching product details (e.g., name, price, availability) from an online store's server.

const Product = {
    name:"MAttress",
    productId :2,
    price :2000
}

const fetchProductDetails= (product)=> {
    return new Promise((resolve,reject)=>{
         if (product) {
                resolve(Product);
            } else {
                reject("Product not found");
            }
    })
}
console.log(fetchProductDetails(Product))

fetchProductDetails(Product)
    .then(Product => {
        console.log("Name: "+Product.name+ ", ID: "+ Product.productId+", Price: "+Product.price);

    })
    .catch(e => {
        console.error("Error:", e);
    });

fetchProductDetails(Product)