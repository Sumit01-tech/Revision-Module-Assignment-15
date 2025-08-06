const { v4: uuidv4 } = require('uuid');

let products = [];
const getAllProducts = (req, res) => {
    res.status(200).json(products);
};
const getProductById = (req, res) => {
    const product = products.find(p => p.id === req.params.id);
    if (!product) return res.status(404).json({ error: 'Product not found' });
    res.status(200).json(product);
};
const createProduct = (req, res) => {
    const { name, price } = req.body;
    if (!name || !price) return res.status(400).json({ error: 'Name and price are required' });

    const newProduct = { id: uuidv4(), name, price };
    products.push(newProduct);
    res.status(201).json(newProduct);
};
const updateProduct = (req, res) => {
    const { name, price } = req.body;
    const product = products.find(p => p.id === req.params.id);

    if (!product) return res.status(404).json({ error: 'Product not found' });

    if (name) product.name = name;
    if (price) product.price = price;

    res.status(200).json(product);
};
const deleteProduct = (req, res) => {
    const index = products.findIndex(p => p.id === req.params.id);
    if (index === -1) return res.status(404).json({ error: 'Product not found' });

    const deleted = products.splice(index, 1);
    res.status(200).json({ message: 'Product deleted', product: deleted[0] });
};

module.exports = {
    getAllProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
