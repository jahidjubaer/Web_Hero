// there have a parent class, form parent class, child class can use its property and method using supper keyword; so lets see how its works;

// here player is parent class ;
class player {
  constructor(name, age, position) {
    this.name = name;
    this.age = age;
    this.location = "Bangladesh";
  }
  // goal method -> like an function , work for only player class;
  goal() {
    console.log("scored a goal");
  }

  cup() {
    console.log("this player won a cup");
  }
}

// class1
// hokeyPlayer class extends player class now hokeyPlayer class easily access all the properties of player class;
class hokeyPlayer extends player {
  // constructor method ; where we write properties ;
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }
}

// class2
// footBallPlayer class extends player class now footBallPlayer class easily access all the properties of player class;
class footBallPlayer extends player {
  // constructor method ; where we write properties ;
  constructor(name, age, position) {
    super(name, age);
    this.position = position;
  }
}

// class3
// CricketPlayer class extends player class now CricketPlayer class easily access all the properties of player class;
class CricketPlayer extends player {
  // constructor method ; where we write properties ;
  constructor(name, age, expertise) {
    super(name, age);
    this.expertise = expertise;
  }

  // goal scoredRun method -> like an function , work for only player class;
  scoredRun() {
    console.log("scored a goal");
  }

  wicket() {
    console.log("take a wicket");
  }
}

// now what is you observation after lookup all three class? there have some similar method and properties in there write ? so writing repeatedly is pain right ? so what we can do ? we can make a parent class and write there all the similar class and method in there , then inherit form there ; look up there ;

// lets make objet for each class ;
const cricketPlayer1 = new CricketPlayer("Jahid", 21, "BatsMan");
console.log(cricketPlayer1);

const footBallPlayer1 = new footBallPlayer("Rakib", 22, "left Wing");
console.log(footBallPlayer1);

const hokeyPlayer1 = new hokeyPlayer("Thasin", 32, "Right Back");
console.log(hokeyPlayer1);
