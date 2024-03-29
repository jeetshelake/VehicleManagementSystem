import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slices/AuthSlice'
const store = configureStore({
    reducer: {
        login_user:AuthSlice
    }
  })
  export default store