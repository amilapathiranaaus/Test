const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON and serve static files
app.use(express.json());
app.use(express.static('public'));

// In-memory storage for articles (replace with a database in production)
let articles = [];

// Get all articles
app.get('/articles', (req, res) => {
    res.json(articles);
});

// Save a new article
app.post('/articles', (req, res) => {
    const article = req.body;
    articles.unshift(article); // Add to beginning
    res.status(201).send('Article saved');
});

// Start the serve
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});