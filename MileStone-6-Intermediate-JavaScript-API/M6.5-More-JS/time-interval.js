function getData() {
  console.log("one");
  console.log("two");

  let num = 0;
  const intervalId = setInterval(() => {
    console.log(num++);

    if (num == 10) {
      clearInterval(intervalId);
    }
  }, 1000);

  console.log("four");
  console.log("five");
}

getData();
