function duplicateArray(array) {
    let noDuplicateStr = [];

    for(item of array){
        if(noDuplicateStr.includes(item) === false){
            noDuplicateStr.push(item);
        } 
    }
    return noDuplicateStr;
}

let array = ['akib', 'rakib', 'ratul', 'rahul', 'rakib', 'rahin', 'rahul'];
console.log(duplicateArray(array));
