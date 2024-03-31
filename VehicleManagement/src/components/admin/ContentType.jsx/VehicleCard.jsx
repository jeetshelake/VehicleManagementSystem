import React from 'react'
import { useDispatch } from 'react-redux'
import {useNavigate } from 'react-router-dom'
import { showDynamic } from '../../../store/slices/DynamicSlice'
const VehicleCard = ({...obj}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cardClick = () =>{
    navigate(`${obj.data.id}`)
    dispatch(showDynamic(obj.data))
  }
  return (
    <>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-auto"  >
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-xl w-60 cursor-pointer bg-white hover:bg-slate-300" onClick={cardClick}>
            <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={obj.data.driverPhoto}></img>
            <div className="flex-grow">
            <h2 className="text-gray-900 title-font font-medium">{obj.data.driverName}</h2>
            <p className="text-gray-500">{obj.data.carName}</p>
            <p className={(obj.data.status=='available'?'text-green-700 font-semibold' : obj.data.status=='reserved'?'text-yellow-500 font-semibold':obj.data.status=='booked'?'text-violet-600 font-semibold':'text-red-600 font-semibold')}>{obj.data.status}</p>
            </div>
            </div>
        </div>
    </>
  )
}

export default VehicleCard