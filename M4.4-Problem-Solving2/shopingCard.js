const product = [
    {name: 'Shirt', price: 500, quantity: 4},
    {name: 'pant', price: 600, quantity: 3},
    {name: 'tshirt', price: 400, quantity: 8},
    {name: 'cap', price: 900, quantity: 2},
]

function totalPrice(product) {
    let priceSum = 0;
    for(item of product){
        priceSum += item.price * item.quantity;
    }
    return priceSum;
}

console.log('Total cost', totalPrice(product));
