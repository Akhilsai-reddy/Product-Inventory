import { Router } from "express";
import Products from "../Models/Products.js";

const router = Router();


router.get("/", async (req, res) => {
  try {
    const products = await Products.find({});
    res.send(products);
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/", async (req, res) => {
  const { product_name, quantity, price, description } = req.body;
  // console.log(req.user)
  const products = new Products({
    product_name,
    quantity,
    price,
    description,
  });
  try {
    await products.save();
    res.send({ status: "success" });
  } catch (error) {
    console.log(error.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const product = await Products.find({ _id: req.params.id });
    res.send(product);
  } catch (error) {
    console.log(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    await Products.updateOne({ _id: req.params.id }, { $set: req.body });
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await Products.deleteOne({ _id: req.params.id});
    res.send({ status: "success"});
  } catch (error) {
    console.log(error.message);
  }
});

export default router;
