function print1() {
  print2();
  console.log(1);
}
function print2() {
  // what if we call a async function;
  setTimeout(() => {
    console.log("time, ", 2);
  }, 0);

  //if its follow the call stack it should print time 2 first , but it will print at the last;
  // why async ; but it follow event queue; like if i write same async function in another scope it will follow the event queue ;

  print3();
  console.log(2);
}
function print3() {
  // but if the waiting time is more than other it will break the event queue role ;
  setTimeout(() => {
    console.log("time, ", 3);
  }, 500);

  print4();
  console.log(3);
}
function print4() {
  setTimeout(() => {
    console.log("time, ", 4);
  }, 0);
  print5();
  console.log(4);
}
function print5() {
  console.log(5);
}

print1();

// here js maintain the call stack ;
