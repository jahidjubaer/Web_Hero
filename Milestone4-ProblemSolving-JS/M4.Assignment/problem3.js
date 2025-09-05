function  bestTeam( player1, player2 ) {
          if(typeof player1 !== "object" || typeof player2 !== "object") return "Invalid";

          let player1Card = player1.foul + player1.cardR + player1.cardY; 
          let player2Card = player2.foul + player2.cardR + player2.cardY; 

          if(player1Card < player2Card) return player1.name;
          else if(player1Card === player2Card) return "Tie"
          else return player2.name;
}

console.log(bestTeam({ name: "Germany", foul: 10, cardY: 1, cardR: 1 },"France"));
