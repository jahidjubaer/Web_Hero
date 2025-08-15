function  onlyCharacter( str ) {

    if(typeof str !== "string") return "Invalid";
    
    let noSpace = str.split(" ").join("");

    return noSpace.toUpperCase();
}

console.log(onlyCharacter("Cy   bar- At  tac k  ")); 