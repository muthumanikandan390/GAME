import { createSlice } from '@reduxjs/toolkit';

const initialState = {

  playerArr : [],
  value: 0,

};

export const gameSlice = createSlice(
  { name: 'game',
    initialState,
    reducers : {
      increment: (state) => {
        state.value += 1
      },
    }
 })


 export const { increment } = gameSlice.actions
 export default gameSlice.reducer