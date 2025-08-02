// slice ;
let name = 'my name is jahid hasan';
let myName = name.slice(0, 5);
console.log(myName);

// spit ;
let job = 'my job is sleeping all the day';
let jobStr = job.split(' ');
console.log(jobStr);
// you can also spit with any latter of something ;
console.log(job.split('a'));
// here is spit the string with a;
// mostly it use for 
let friend = 'jahid,nahid,rokib, nazmul, rahik, kowshik';
console.log(friend.split(','));

// in reverse way we can join the string ;
let friends = [ 'jahid', 'nahid', 'rokib', ' nazmul', ' rahik', ' kowshik' ];
console.log(friends.join());
// by defult it join with an , ;
console.log(friends.join('||'));