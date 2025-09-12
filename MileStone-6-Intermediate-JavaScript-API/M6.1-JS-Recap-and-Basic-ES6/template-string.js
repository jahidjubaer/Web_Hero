// template string
// if we want to write multiple line of string what we can do ?
const poem = "am pata jura jura \n" +
"marbo cabuk corbo gura \n" +
"ore bubu sore dara";


// its not a clean code right ? there comes template string 
// how to write 
const rePoem = `am pata jura jura 
marbo cabok corbo gura 
ore bubu sore dara`;
console.log(rePoem);

// lets look the next thing 
function add(num1 , num2) {
    const sum = num1 + num2;
    console.log(num1 + " and " + num2  + " sum is : " + sum);

    // we can write easily with template string 
    console.log(`${num1} and ${num2} sum is : ${sum}`);
    // using ${} -> dynamically access the js . we can write any code of js
    
}
add(4, 3);

// ex: 
const price = 120;
console.log(`${price} taka 30% discounted price will : ${price * 0.7} `);

