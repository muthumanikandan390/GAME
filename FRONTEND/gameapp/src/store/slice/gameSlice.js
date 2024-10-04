
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playerArr: [],
  value: 0,
  playerArrLength: 0,
  endCount:0,
  result:[{
    player1:'ramesh',
    player2:'suresh',
    player1Score:10,
    player2Score:20,
    winner:'suresh',
    runner:'ramesh',
    tied:'tied',
  }]
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
      console.log("bothScore",bothScore)
    }

  },
});

export const { increment, setplayerOne, setplayerTwo, endGameLogic , scoreLogic} = gameSlice.actions;

export default gameSlice.reducer;
