import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import ProductsRoutes from "./Routes/ProductsRouts.js";
import MongoDb from "./DataBase/MongoDb.js";
import UserAuth from "./Routes/UserAuth.js";


const app = express();
app.use(cors());
app.use(bodyParser.json());

await MongoDb();

app.get("/", (req, res) => {
  res.send("Welcome...");
});

app.use("/Products", ProductsRoutes);
app.use("/users", UserAuth);

app.listen(3001, () => console.log("app is running at http://localhost:3001"));
