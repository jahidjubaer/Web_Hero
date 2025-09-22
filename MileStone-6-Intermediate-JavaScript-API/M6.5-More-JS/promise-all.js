const getData = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log(num);

  if (num > 5) {
    return resolve({ num: num });
  } else {
    return reject({ error: "it will give an error" });
  }
});

const getData1 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("number num2", num);

  if (num > 5) {
    return resolve({ num: num });
  } else {
    return reject({ error: "it will give an error" });
  }
});

const getData3 = new Promise((resolve, reject) => {
  const num = Math.random() * 10;
  console.log("number num3", num);

  if (num > 5) {
    return resolve({ num: num });
  } else {
    return reject({ error: "it will give an error" });
  }
});

// catch all the promise at a time ;
Promise.all([getData, getData1, getData3])
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
