// below 100 - 400;
// 100 - 200 - 350; only applicable for after 100 
// above 200 - 300; only applicable for after 200

function discount(quantity) {
    let totalPrice = 0;
    if(quantity < 100){
        totalPrice = quantity * 400;
        return totalPrice
    }
    else if(quantity < 200){
       const first100 = 100 * 400;
       let remQuantity = quantity - 100;
       let remQuantityPrice = remQuantity * 350;
       totalPrice = first100 + remQuantityPrice;
       return totalPrice; 
    }
    else{
        const first100 = 100 * 400;
        const second100 = 100 * 350;
        let remQuantity = quantity - 200;
       let remQuantityPrice = remQuantity * 300;
       totalPrice = first100 + second100 + remQuantityPrice;
       return totalPrice; 
    }
}

console.log(discount(135));

