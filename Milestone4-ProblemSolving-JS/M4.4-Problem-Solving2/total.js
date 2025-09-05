// sum of total form an object 

const price = [
    {name: 'pant', price: 400},
    {name: 'shirt', price: 500},
    {name: 'shoe', price: 1400},
    {name: 'belt', price: 500},
]

function totalPrice(price) {
    let priceSum = 0;
    for(item of price){
        priceSum += item.price;
    }
    return priceSum;
}

console.log('Ajker market : ', totalPrice(price));
