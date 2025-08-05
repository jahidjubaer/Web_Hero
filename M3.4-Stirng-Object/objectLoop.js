const mobile = {
    brand : 'samsung',
    price : 15000,
    rating : '5 star',
    keyFeature : 'Smart Al'
}

// for of - normal loop
// for in - object loop

for(values in mobile){
    // console.log(values);
    console.log(values, mobile[values]);
}

let keys = Object.keys(mobile);
for(const value of keys){
    console.log(value , ':' , mobile[value]);
}
