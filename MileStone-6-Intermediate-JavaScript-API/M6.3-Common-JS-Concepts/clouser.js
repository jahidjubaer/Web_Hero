// closure is all about block ; 

function number(x) {
    let y = x; 
    function increment(user) {
        // it can use properties form its parents function; 
        y++; 
         console.log('inner function ',user, y);    
    }
    // parent function call the inner function ; 
    return increment; 
}

// here using a variable call the parent function ; 
const innerFunction = number(4);
// after that we call the inner function , and increment the value of y ; 
innerFunction();
innerFunction();
innerFunction();
innerFunction();

console.log('-----------------------------');

// here we call with new parameter parent function ; 
const newInnerFunction = number(0); 
newInnerFunction('rahim'); 
newInnerFunction('rahim');
newInnerFunction();
newInnerFunction();


/**
 * in simple world , what happen here ; 
 * there is two function ; parent function and inner is child function ; 
 * in parent function we return the child function ; 
 * so -> how its works ; 
 * when we call parent function it return the the child function ; mean it not return any value of something like that ; so we need to use the return value as function ; 
 * so we have to call again ; 
 * 
 * int that case we call the parent class one time and take the return value in a variable ; 
 * so this variable contain the child function ; 
 * so we cant call the , if there have any parameter we can pass a value ; 
 * but the thing is how many time we call child class it's now important to parent call we already call the parent call with a value that gonna no change; 
 * 
 * */ 