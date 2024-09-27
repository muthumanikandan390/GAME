import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playerArr: [],
  value: 0,
  playerArrLength:0,

};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {



    increment: (state) => {
      state.value += 1;
    },



    setplayerOne: (state, action) => {
      state.playerArr[0] = action.payload;
      console.log("redux arr" , state.playerArr)
    },



    setplayerTwo: (state, action) => {
      state.playerArr[1] = action.payload;
      console.log("redux arr" , state.playerArr)
      if (action.payload == null) {
        state.playerArrLength = 0
      } else {
        state.playerArrLength = 2
      }
    },



  },
});


export const { increment, setplayerOne , setplayerTwo , playerArrLengthCheck} = gameSlice.actions;

export default gameSlice.reducer;
