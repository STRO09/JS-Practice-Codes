// Create a class named Product with the following attributes: name, productId, price, and a displayDetails method. Provide code to access and display these details for a product.

class Product {
    name="MAttress"
    productId =2
    price = 2000
    displayDetails(){
        console.log("Name: "+this.name+", ProductID: "+this.productId+", Price: "+this.price)
    }
}


product= new Product()
product.displayDetails()