function totalFine( fare ) {
        if(typeof fare !== "number" || fare <= 0) return 'Invalid';
        const fine = fare + (20 / 100 * fare) + 30;
        return fine;
}


function  onlyCharacter( str ) {

    if(typeof str !== "string") return "Invalid";
    
    let noSpace = str.split(" ").join("");

    return noSpace.toUpperCase();
}


function  bestTeam( player1, player2 ) {
          if(typeof player1 !== "object" || typeof player2 !== "object") return "Invalid";

          let player1Card = player1.foul + player1.cardR + player1.cardY; 
          let player2Card = player2.foul + player2.cardR + player2.cardY; 

          if(player1Card < player2Card) return player1.name;
          else if(player1Card === player2Card) return "Tie"
          else return player2.name;
}

function  isSame(arr1 , arr2 ) {
    if(!Array.isArray(arr1) || !Array.isArray(arr2)){
        return "Invalid"
    }

    if(arr1.length === arr2.length){
        for(let i = 0; i < arr1.length; i++){
            if(arr1[i] !== arr2[i]) return false; 
        }
        return true;
    }
    else{
        return false;
    }
    
}

function  resultReport( marks ) {
    if(!Array.isArray(marks)) return "Invalid";

     if (marks.length === 0) {
        return { finalScore: 0, pass: 0, fail: 0 };
    }

    let totalMarks = 0;
    let passed = 0;
    let failed = 0;
    for(mark of marks){
        totalMarks += mark;
        if(mark >= 40) passed++;
        else failed++;
    }

    let fScore = Math.round(totalMarks / marks.length);
    
    return {finalScore: fScore, pass: passed, fail: failed};

}