// normally this mean it's contain the object of class; 

class vehicle {
    constructor(name, price, condition){
        this.name = name; 
        this.price = price;
        this.condition = condition;
        
    }
    getThis(){
        // this always return the vehicle class; like class object ; 
        console.log(this);
    }

    getPrice(){
        // print those value which price object call ; 
        console.log(this.price);
        
    }

    vehicleCondition(){
        console.log("lets check the condition");
        // getCondition = () => console.log(this.condition);
        // here this make an issue , i mean this can't access form arrow function ; 
    }
    
}

const car1 = new vehicle('toytoa', 50000, 'brand new');
const car2 = new vehicle('lambo', 30000, 'repaired');

// call the method getThis / we can see the vehicle class; 
car1.getThis();

// call car2 this ; 
car2.getThis();

// lets call the price ; 
car1.getPrice(); 

// lets call the get condition ; 
car2.vehicleCondition();
