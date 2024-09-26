import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  playerArr: [],
  value: 0,
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
  },
});


export const { increment, setplayerOne} = gameSlice.actions;

export default gameSlice.reducer;
