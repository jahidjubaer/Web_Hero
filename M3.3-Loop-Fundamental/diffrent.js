// odd number using for loop
for(let i = 0; i <= 10; i++){
    if(i % 2 === 1){
        console.log(i);
    }
}

// even number using for loop
for(let i = 0; i <= 10; i += 2){
    console.log(i);
}
// print the number divisible by 5 
for(let i = 1; i <= 10; i++){
    if(i % 5 == 0){
        console.log('divisible by 5 : ', i);
    }
}

// print the number divisible by 3
for(let i = 1; i <= 10; i++){
    if(i % 3 == 0){
        console.log('divisible by 5 : ', i);
    }
}

// print the number divisible by 5  and 3
for(let i = 1; i <= 20; i++){
    if(i % 5 === 0 && i % 3 === 0){
        console.log('divisible by 5 and 3 : ', i);
    }
}