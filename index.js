require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const menuRoutes = require('./routes/menuRoutes');

const app = express();
const port = process.env.PORT || 3010;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/menu', menuRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Restaurant Menu API!');
});

// Start Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
