// continue - skip rest of the code for this iteration

// continue using for loop ;
for(let i = 1; i <= 30; i++){
    console.log(i);
    i++;
    if(i % 5 === 0){
        continue;
    }
}

// continue using while loop;
let n = 1;
while(n <= 30){
    n++;
    console.log(n);
    if(n % 2 === 0 & n % 3 === 0){
        continue;
    }
}