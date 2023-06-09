const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const Port = process.env.Port || 5000;

const productsCollection = require("./data/product.json");

app.get("/", (req, res) => {
  res.send("Now server is running Debos");
});

app.get("/allProducts", (req, res) => {
  res.send(productsCollection);
});

app.get("/product/:id", (req, res) => {
  const id = req.params.id;
  const getSingleItem = productsCollection?.find((p) => p.id == id);
  if (!getSingleItem) {
    res.send("Data not found");
  }
  res.send(getSingleItem);
});

app.get("/category/:name", (req,res)=>{
  const name=req.params.name;
  const getName=productsCollection?.filter(n=>n.name=name);
  res.send(getName);
})

app.listen(Port, () => {
  console.log("Server is running", Port);
});
