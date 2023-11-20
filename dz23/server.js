const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'dz23')));

app.get('/api/data', (req, res) => {
  const Category = {
    Flowers: 'flowers',
    Cars: 'cars',
    Phones: 'phones',
  };

  const products = [
    {
      id: 1,
      Category: Category.Flowers,
      name: 'Rose',
      price: 100,
    },
    {
      id: 2,
      Category: Category.Flowers,
      name: 'Lotos',
      price: 100,
    },
    {
      id: 1,
      Category: Category.Cars,
      name: 'Shkoda',
      price: 1000,
    },
    {
      id: 2,
      Category: Category.Cars,
      name: 'Mazda',
      price: 1000,
    },
    {
      id: 1,
      Category: Category.Phones,
      name: 'Iphone',
      price: 500,
    },
    {
      id: 2,
      Category: Category.Phones,
      name: 'Xiaomi',
      price: 500,
    },
  ];

  const jsonData = {
    categories: Object.values(Category),
    products: products,
  };
  res.json(jsonData);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});
app.get('/style.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'style.css'));
});

app.get('/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'app.js'));
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});