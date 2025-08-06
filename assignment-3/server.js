const express = require('express');
const productRoutes = require('./routes/productRoutes');
const logger = require('./middleware/logger');
const app = express();
const PORT = 8080;

app.use(express.json());
app.use(logger);

app.use('/api/v1/products', productRoutes);

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found!' });
});

app.listen(PORT, () => {
    console.log("Server Started");
});
