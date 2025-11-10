const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://simpleuser:uuD4cNj6Ir7hGiSD@cluster0.ecc7s.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // all api need to create here ;

    

    // create a new db collection ;
    const myDB = client.db("myDB");
    const myCollection = myDB.collection("user");

    // get data form mongo db ;


    // post data to mongodb 
    app.post("/user", async (req, res) => {
      const newUser = req.body;
      const result = await myCollection.insertOne(newUser);
      res.send(result);
      console.log(newUser);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.get("/", (req, res) => {
  res.send("simple curd server is running");
});

app.listen(port, () => {
  console.log(`simple curd server is running on port ${port}`);
});
