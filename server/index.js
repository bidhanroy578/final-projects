import express from "express";
import cors from "cors";
import { configDotenv } from "dotenv";
configDotenv();
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";
import jwt from "jsonwebtoken";

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// Middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//listeners responders
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

    //db collections

    const menuCollection = client.db("bistro_boss_DB").collection("menu");
    const usersCollection = client.db("bistro_boss_DB").collection("users");
    const reviewCollection = client.db("bistro_boss_DB").collection("reviews");
    const cartCollection = client.db("bistro_boss_DB").collection("carts");

    // here is the codes

    //jwt related

    app.post("/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.Secret, { expiresIn: "1h" });
      res.send({ token });
    });

    // middlewares

    const verifyToken = async (req, res, next) => {
      if (!req.headers.authentication)
        return res.status(401).send({ message: "unauthorized access" });
      const token = req.headers.authentication.split(" ")[1];
      if (!token)
        return res.status(401).send({ message: "unauthorized access" });
      // console.log("token in the middleware verify token ", token);
      jwt.verify(token, process.env.Secret, (err, decode) => {
        if (err) {
          console.log("token verify failed.");
          return res.status(401).send({ message: "unauthorized access" });
        }
        if (decode) {
          req.decoded = decode.email;
          console.log("token verified successfully");
          next();
        }
      });
    };

    const verifyAdmin = async (req, res, next) => {
      const query = { email: req.decoded };
      const result = await usersCollection.findOne(query);
      let isAdmin = result?.role === "admin";
      if (!isAdmin)
        return res.status(403).send({ message: "forbidden access" });
      next();
    };

    // get all users list
    app.get("/users", verifyToken, verifyAdmin, async (req, res) => {
      const result = await usersCollection.find().toArray();
      res.send(result);
    });

    //check if the user is admin or not
    app.get("/users/admin/:email", verifyToken, async (req, res) => {
      const email = req.params.email;
      if (req.decoded !== email)
        return res.status(403).send({ message: "forbidden access" });
      const query = { email: email };
      const result = await usersCollection.findOne(query);
      let isAdmin = result.role === "admin";
      res.send({ isAdmin });
    });

    //users collection for managing user roles
    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user.email };
      // console.log(user, query);
      const isEsisting = await usersCollection.findOne(query);
      if (isEsisting) {
        return res.send({ message: "user already exists", insertedId: null });
      }
      const result = await usersCollection.insertOne(user);
      result.message = "new user added to list";
      res.send(result);
    });

    //changing users role
    app.patch("/users/:id", verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const filter = { _id: new ObjectId(id) };
      const updoc = {
        $set: {
          role: req.body.role,
        },
      };
      const result = await usersCollection.updateOne(filter, updoc);
      res.send(result);
    });

    app.delete("/users/:id", verifyToken, verifyAdmin, async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    //add to cart codes
    app.get("/carts", async (req, res) => {
      const query = { email: req.query.email };
      const result = await cartCollection.find(query).toArray();
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
      const query = { _id: new ObjectId(req.body) };
      // const id = req.body;
      // console.log(id);
      const result = await cartCollection.deleteOne(query);
      res.send(result);
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
