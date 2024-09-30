import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();
const PORT = 5000;

const db = "mongodb+srv://muthumanikandan390d:FVow4DOsbw4pkMLH@manikandandb.3zn9a.mongodb.net/";

app.use(cors());

console.log("Attempting to connect to MongoDB...");

mongoose.connect(db)
  .then(() => console.log("Connected to db"))
  .catch(err => console.error("Could not connect to db:", err));

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello, world');
});

app.post('/', (req, res) => {
  if (Object.keys(req.body).length > 1) {
    console.log("Request body:", req.body);
  }
  res.status(200).send('Data processed');
});

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
