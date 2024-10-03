

import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const matchSchema = new mongoose.Schema({
  player1: { type: String, required: true },
  player2: { type: String, required: true },
});


const Match = mongoose.model('Match', matchSchema, 'match');


router.post('/', async (req, res) => {
  try {
    const { players1, player2 } = req.body;
    const newMatch = new Match({
      player1: players1,
      player2: player2,
    });
    const savedMatch = await newMatch.save();
    console.log("Data saved to DB:", savedMatch);
    res.status(201).send('Match data saved successfully');
  } catch (error) {
    console.error('Error saving data to the database:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/matches', async (req, res) => {
  try {
    const matches = await Match.find();
    res.status(200).json(matches);
  } catch (error) {
    console.error('Error retrieving matches:', error);
    res.status(500).send('Internal Server Error');
  }
});

export default router;
