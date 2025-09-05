// Ticket fare Calculator
    // - Children (age < 10): free
    // - Students get a 50% discount
    // - Senior citizens (age >= 60) gets a 15% Discount
    // - Otherwise Regular ticket fare 800 tk


    var age = 65;
    var student = false;

    if(age < 10 ){
        console.log('free for you babe');
    }
    else if(student){
        console.log('after 50 % discount : ', 800 - (50 / 100) * 800);
    }
    else if(age >= 60){
        console.log('after 15 % discount : ',800 -(15 / 100) * 800);
    }
    else{
        console.log('you have no discount you have to pay : ', 800);
    }
