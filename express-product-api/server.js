const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let products = [];
let idCounter = 1;

app.get('/products', (req, res) => {
    res.status(200).json(products);
});
app.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json(product);
});
app.post('/products', (req, res) => {
    const { name, price } = req.body;

    if (!name || price === undefined) {
        return res.status(400).json({ message: 'Name and price are required' });
    }
    const newProduct = {
        id: idCounter++,
        name,
        price
    };
    products.push(newProduct);
    res.status(201).json(newProduct);
});

app.listen(PORT, () => {
    console.log("Server Started");
});
