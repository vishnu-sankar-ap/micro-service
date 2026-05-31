const express = require('express');
const axios = require('axios');

const app = express();

const orders = [
  {
    orderId: 101,
    userId: 1,
    productId: 1
  }
];

app.get('/orders', async (req, res) => {
  try {
    const users = await axios.get('http://localhost:3001/users');
    const products = await axios.get('http://localhost:3002/products');

    res.json({
      orders,
      users: users.data,
      products: products.data
    });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.get('/health', (req, res) => {
  res.status(200).send("OK");
});

app.listen(3003, () => {
  console.log("Order service running");
});