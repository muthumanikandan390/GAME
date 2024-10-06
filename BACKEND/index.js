import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes.js';

const app = express();
const PORT = 5000;

const db = "mongodb+srv://muthumanikandan390d:FVow4DOsbw4pkMLH@manikandandb.3zn9a.mongodb.net/";

app.use(cors());

console.log("Attempting to connect to MongoDB...");

mongoose.connect(db)
  .then(() => console.log("Connected to db"))
  .catch(err => console.error("Could not connect to db:", err));

app.use(bodyParser.json());
app.use('/', routes);

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));
