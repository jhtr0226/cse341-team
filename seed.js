require('dotenv').config();
const mongoose = require('mongoose');

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });


const DataSchema = new mongoose.Schema({
  id: Number,
  title: String,
  description: String,
  image: String,
  link: String,
});

const DataModel = mongoose.model('Data', DataSchema);

const seedData = async () => {
  try {
    await DataModel.insertMany([
      {
        id: 1,
        title: 'Example Title 1',
        description: 'This is the first example description.',
        image: 'data:image/png;base64,...', // Replace with real base64
        link: 'https://example1.com',
      },
      {
        id: 2,
        title: 'Example Title 2',
        description: 'This is the second example description.',
        image: 'data:image/png;base64,...', // Replace with real base64
        link: 'https://example2.com',
      },
    ]);
    console.log('Sample Data Inserted');
    process.exit();
  } catch (err) {
    console.error('Error inserting sample data:', err);
    process.exit(1);
  }
};

seedData();