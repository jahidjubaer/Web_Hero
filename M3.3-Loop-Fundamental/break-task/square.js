// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

let square = 2;
for(let i = 1; i <= 100; i++){
    if(square * square === i){
        square++;
        console.log(i);
        break;
    }
}

