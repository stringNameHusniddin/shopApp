import { configureStore } from '@reduxjs/toolkit'
import ItemReducer from '../slice/index' 

export default configureStore({
  reducer: {
    item:ItemReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
})