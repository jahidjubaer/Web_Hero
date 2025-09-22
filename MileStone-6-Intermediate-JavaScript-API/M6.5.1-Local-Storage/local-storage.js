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
