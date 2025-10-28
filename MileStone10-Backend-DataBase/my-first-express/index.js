const express = require("express");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// we can also create multiple port like that ;
app.get("/data", (req, res) => {
  res.send("data server");
});

app.listen(port, () => {
  console.log(`the app listening port is ${port} `);
});
