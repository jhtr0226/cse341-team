require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 8080;

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error:', err));

const DataSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  image: String,
  link: String,
});

const DataModel = mongoose.model('Data', DataSchema);

app.get('/api/data', async (req, res) => {
  try {
    const data = await DataModel.find();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});