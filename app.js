const express = require("express");
const app = express();
const port = 3000;
const products = [
  { name: "Laptop", price: 799.99 },
  { name: "Smartphone", price: 499.99 },
  { name: "Wireless Earbuds", price: 99.99 },
  { name: "Smartwatch", price: 199.99 },
  { name: "Bluetooth Speaker", price: 49.99 },
  { name: "Mechanical Keyboard", price: 89.99 },
  { name: "Gaming Mouse", price: 39.99 },
  { name: "Monitor", price: 149.99 },
  { name: "External Hard Drive", price: 79.99 },
  { name: "USB-C Hub", price: 29.99 },
  { name: "Portable Charger", price: 25.99 },
  { name: "VR Headset", price: 299.99 },
  { name: "Wireless Router", price: 129.99 },
  { name: "E-Reader", price: 139.99 },
  { name: "Action Camera", price: 249.99 },
  { name: "Microphone", price: 59.99 },
  { name: "Tripod", price: 34.99 },
  { name: "Graphics Tablet", price: 179.99 },
  { name: "Smart Light Bulb", price: 19.99 },
  { name: "Robot Vacuum", price: 229.99 },
];
app.get("/", (req, res) => {
  res.json({
    status: 200,
    data: products,
  });
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
