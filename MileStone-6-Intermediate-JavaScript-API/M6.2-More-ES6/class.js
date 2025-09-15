// class 

// this is how write a class -> class is like an template ; 
// where have properties and method ; 
class player {

    // constructor method ; where we write properties ; 
    constructor(name, age){
        this.name = name;
        this.age = age;
        this.location = 'Bangladesh';
    }

    // goal method -> like an function , work for only player class; 
    goal(){
        console.log('scored a goal');
    }
    
    cup(){
        console.log('this player won a cup');
    }
}

// create an object of class ; 
const player1 = new player('rakib', 32); // when we create object for class player() call the constructor class auto; 
const player2 = new player('jamal', 29);

// player scored a goal ; 
player2.goal();

console.log(player1);
console.log(player2);

