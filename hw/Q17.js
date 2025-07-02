// Create a user-defined exception called InvalidCouponCode and demonstrate how it is used when a customer tries to apply an invalid coupon code during checkout.

class InvalidCouponCode extends Error {
    constructor() {
        super('Coupon code is invalid or expired')
        this.name='Couponcode Failure'
    }
}


function applyCoupon(code) {
    try{
    if(code!="AW6670") {
        throw new InvalidCouponCode()
    }
    else {
        console.log("Coupon applied Successfully! nerd.")
    }
    }
    catch(e){
        console.log(e.name+" : "+e.message)
    }
}

applyCoupon("AW6670")
applyCoupon("AW6675")

