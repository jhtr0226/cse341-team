require('dotenv').config();
const express = require('express');
const connectDB = require('./database/connect');
const dataRoutes = require('./routes/dataRoutes');

const app = express();
const port = 8080;

// Middleware
app.use(express.json());

// MongoDB Connection
connectDB();

// Routes
app.use('/api', dataRoutes);

// Start the Server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});