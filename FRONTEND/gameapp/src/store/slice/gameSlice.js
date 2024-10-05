
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playerArr: [],
  value: 0,
  playerArrLength: 0,
  endCount:0,
  result:{
    player1:'',
    player2:'',
    player1Score:0,
    player2Score:0,
    winner:'',
    runner:'',
    tied:'',
  }
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {

    increment: (state) => {
      state.value += 1;
    },

    setplayerOne: (state, action) => {
      if (action.payload) {
        state.playerArr[0] = action.payload;
      }
      state.playerArrLength = state.playerArr.length;
      // console.log("redux arr", state.playerArr);
    },

    setplayerTwo: (state, action) => {
      if (action.payload) {
        state.playerArr[1] = action.payload;
      }
      state.playerArrLength = state.playerArr.length;
      // console.log("redux arr", state.playerArr);
    },

    endGameLogic: (state , action) => {
      state.endCount += 1;
    },

    scoreLogic: (state , action) => {
      const bothScore = action.payload
      // console.log("bothScore from store",bothScore)
      state.result.player1 = bothScore.player1Name
      state.result.player2 = bothScore.player2Name

      state.result.player1Score = bothScore.player1score
      state.result.player2Score = bothScore.player2score

      state.result.winner = bothScore.winner
      state.result.runner = bothScore.runner

      state.result.tied  = bothScore.tie
    }

  },
});

export const { increment, setplayerOne, setplayerTwo, endGameLogic , scoreLogic} = gameSlice.actions;

export default gameSlice.reducer;
