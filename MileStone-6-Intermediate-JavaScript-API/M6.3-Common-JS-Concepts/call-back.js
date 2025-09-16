// call back function ; 

function pakhiBahi (callMe, patro, partri){

    if(partri){
        // so i can use the function as function ; 
        return callMe(patro);
    }
    else{
        console.log('tor kopale a bia nai ');
    }
}

function callBro(person){
    console.log('calling', person);
}

// here is pass a function as arguments ; 
pakhiBahi(callBro, 'rahim', 'riam');



