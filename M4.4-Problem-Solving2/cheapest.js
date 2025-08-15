const phones = [
    {barnd: 'nokia', price: 14000, camera: '48mpx', color:'black'},
    {barnd: 'Samsung', price: 18000, camera: '48mpx', color:'black'},
    {barnd: 'Iphone', price: 65000, camera: '48mpx', color:'black'},
    {barnd: 'Nothing', price: 45000, camera: '48mpx', color:'black'},
    {barnd: 'Vivo', price: 12000, camera: '48mpx', color:'black'}
]



function cheapest(phones) {
    
    let cheapestPhone = phones[0];
    for(item of phones){
        if(item.price < cheapestPhone.price){
            cheapestPhone = item;
        }
        
    }
    return cheapestPhone;
}

console.log('i will buy,', cheapest(phones));

