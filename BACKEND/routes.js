

import express from 'express';
import mongoose from 'mongoose';

const router = express.Router();

const matchSchema = new mongoose.Schema({
  player1: { type: String, required: true },
  player2: { type: String, required: true },
});

const resultSchema = new mongoose.Schema({
  player1Name: { type: String, required: true },
  player2Name: { type: String, required: true },
  player1score: { type: Number, required: true },
  player2score: { type: Number, required: true },
  winner: { type: String, required: true },
  runner: { type: String, required: true },
  tie: { type: String }
});


const Match = mongoose.model('Match', matchSchema, 'match');
const Result = mongoose.model('Result' , resultSchema , 'result')


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


router.post('/resultData' , async (req , res) => {
  try {
const {player1Name , player2Name , player1score , player2score , winner , runner ,tie } = req.body
const newResult = new Result({
  player1Name,
  player2Name,
  player1score: player1score.countP1,
  player2score: player2score.countP2,
  winner,
  runner,
  tie
});

const savedResult = await newResult.save();
    console.log("Result data saved to DB:", savedResult);
    res.status(201).send('Result data saved successfully');
  }
  catch (error) {
    console.error('Error saving result data to the database:', error);
    res.status(500).send('Internal Server Error');
  }
});


router.get('/resultData', async (req, res) => {
  try {
    const results = await Result.find();
    res.status(200).json(results);
  } catch (error) {
    console.error('Error retrieving result data:', error);
    res.status(500).send('Internal Server Error');
  }
});


export default router;
