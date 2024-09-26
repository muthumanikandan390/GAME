import { configureStore  } from '@reduxjs/toolkit';
import gameReducer from './slice/gameSlice';




const store =configureStore({

  reducer: {
    game :  gameReducer,
  },
  devTools:true,

} )


export default store;