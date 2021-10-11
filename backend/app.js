const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

// routes
const recipes = require('./routes/api/recipes.routes');

const app = express();

// connect database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('MongoDB running!'));

// use Routes
app.use('/api/recipes', recipes);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
