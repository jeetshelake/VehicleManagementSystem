import { createSlice } from "@reduxjs/toolkit";
import photo from '../../assets/user.png'
const AuthSlice = createSlice({
    name:'login-user',
    initialState:{value:{username:'User Name',photo:photo}},
    reducers:{
        submit:(state,action)=>{
            state.value.username=action.payload.username,
            state.value.photo=action.payload.photo
        }
    }
})

export const {submit} = AuthSlice.actions
export default AuthSlice.reducer