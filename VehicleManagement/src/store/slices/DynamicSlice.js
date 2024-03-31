import { createSlice } from "@reduxjs/toolkit";
const AuthSlice = createSlice({
    name:'login-user',
    initialState:{driverdetail:{"id": 57,
    "driverName": "Logan Thompson",
    "carNumber": "DL 32 JK 3456",
    "carName": "Swift",
    "status": "reserved",
    "carPhoto": "https://randomuser.me/api/portraits/cars/57.jpg",
    "phoneNumber": "+919567024225",
    "liveLocation": {
      "city": "New Delhi",
      "latitude": "28.6139",
      "longitude": "77.209"
    },
    "driverPhoto": "https://randomuser.me/api/portraits/men/30.jpg"}},
    reducers:{
        showDynamic:(state,action)=>{
            state.driverdetail.id=action.payload.id,
            state.driverdetail.carNumber=action.payload.carNumber,
            state.driverdetail.carName=action.payload.carName,
            state.driverdetail.status=action.payload.status,
            state.driverdetail.carPhoto=action.payload.carPhoto,
            state.driverdetail.phoneNumber=action.payload.phoneNumber,
            state.driverdetail.liveLocation.city=action.payload.liveLocation.city,
            state.driverdetail.liveLocation.latitude=action.payload.liveLocation.latitude,
            state.driverdetail.liveLocation.longitude=action.payload.liveLocation.longitude,
            state.driverdetail.driverPhoto=action.payload.driverPhoto
        }
    }
})

export const {showDynamic} = AuthSlice.actions
export default AuthSlice.reducer