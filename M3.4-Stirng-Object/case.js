// uppercase - ABCD EFG
// lowercase - abcd efg

let book = 'math';
let subject = 'Math';

if(book === subject){
    console.log('yea i got my book');
}
else{
    console.log('i cant find it , please help me' );
}
// so what will the output ? 'i cant find it, please help me . why ? in book m in lowercase and in subject M in uppercase ;
// so what we can do , lets see 
if(book.toLowerCase() === subject.toLowerCase()){
    console.log('yea i got my book');
}
else{
    console.log('i cant find it , please help me' );
}
// so if we convert both of them in lowercase , it will answer correctly 

// trim, trim end, trim start ;
let season = 'winter ';
let favSeason = 'winter';
if(season === favSeason){
    console.log('yea its you season. enjoy ');
}
else{
    console.log('waiting for you season babe');
}
// output will waiting for your season babe . bz there have a white-space after winter in season . how can we remove it . lets see 
//trim
if(season.trim() === favSeason.trim()){
    console.log('yea its you season. enjoy ');
}
else{
    console.log('waiting for you season babe');
}
// now its perfect 