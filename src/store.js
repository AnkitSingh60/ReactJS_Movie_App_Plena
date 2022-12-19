import { configureStore } from '@reduxjs/toolkit'
import movieSlice from './redux/movieSlice';

export default configureStore({
  reducer: {
    movieAppReducer: movieSlice
  }
})