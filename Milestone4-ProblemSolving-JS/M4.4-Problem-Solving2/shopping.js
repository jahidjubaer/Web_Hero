// let you need to buy 3 pant , 2 shirt , and 1 shoe . the price of pant shirt ,a nd shoe is fixed , you just tell them the quantity the give you the price ;

function totalBii(pantQ, shirtQ, shoeQ) {
    const pant = 800;
    const shirt = 600;
    const shoe = 1200;

    let pantPrice = pant * pantQ;
    let shirtPrice = shirt * shirtQ;
    let shoePrice = shoe * shoeQ;

    const totalPrice = pantPrice + shirtPrice + shoePrice;
    return totalPrice;
}

console.log(totalBii(3, 2, 1));
