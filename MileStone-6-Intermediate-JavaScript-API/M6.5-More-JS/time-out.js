function getData() {
  console.log("one");
  console.log("two");

  const timeOutId = setTimeout(() => {
    console.log(3);
  }, 5000);

  //if we want to cancel the timeout in running time ;
  // we can write clear timeout ;
  //   clearTimeout(timeOutId);

  const timeOutId2 = setTimeout(() => {
    console.log(4);
  }, 5000);

  console.log("four");
  console.log("five");
}

getData();
