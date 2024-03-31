import { configureStore } from '@reduxjs/toolkit'
import AuthSlice from './slices/AuthSlice'
import DynamicSlice from './slices/DynamicSlice'
const store = configureStore({
    reducer: {
        login_user:AuthSlice,
        dynamic:DynamicSlice
    }
  })
  export default store