const setDataLS = () => {
  const num = Math.round(Math.random() * 100);
  console.log("set number", num);

  // set he number to local storage ;
  localStorage.setItem("number", num);
};

const getDataLS = () => {
  // get the value from local storage ;
  const num = localStorage.getItem("number");
  console.log("get number", num);
};

// for non-primitive data we can't store directly ; need to sum modification ;
const setObjectLS = () => {
  const consumer = { name: "abbas", bill: 1200, payBill: 1300 };
  // we can't set the consumer directly in local storage , it wil consider as string ;
  // so we need to stringify the object ;

  const consumerJson = JSON.stringify(consumer);

  // now we can set he stringify value easily ;
  localStorage.setItem("consumer", consumerJson);
};

// how can we get the object or non primitive value form local storage and access the value of object ;

const getObjectLS = () => {
  const consumerJson = localStorage.getItem("consumer");
  // so we got the value as string . i mean stringify value ;

  // now parse the value of object;
  const consumer = JSON.parse(consumerJson);
  console.log(consumer.name);
};
