import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
configDotenv();
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
// Middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const uri = `mongodb+srv://${process.env.user}:${process.env.pass}@cluster0.2umnx.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// into mongodb codes here

async function run() {
  try {
    await client.connect();
    const menuCollection = client.db("bistro_boss_DB").collection("menu");
    const reviewCollection = client.db("bistro_boss_DB").collection("reviews");
    const cartCollection = client.db("bistro_boss_DB").collection("carts");

    // here is the codes

    //add to cart codes
    app.get("/carts", async (req, res) => {
      const result = await cartCollection.find().toArray();
      res.send(result);
    });

    app.post("/carts", async (req, res) => {
      const doc = req.body;
      console.log(doc);
      const result = await cartCollection.insertOne(doc);
      console.log(result);
      res.send(result);
      // res.errored();
    });

    app.delete("/carts", async (req, res) => {
      const query = new ObjectId(req.body);
      const result = await cartCollection.deleteOne(query);
    });

    // get menu list
    app.get("/menu", async (req, res) => {
      const data = await menuCollection.find().toArray();
      res.send(data);
    });

    // get review list
    app.get("/reviews", async (req, res) => {
      const data = await reviewCollection.find().toArray();
      res.send(data);
    });

    // Send a ping to confirm a successful connection

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
